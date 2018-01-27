import React, { Component } from 'react';
import './App.css';
import { Row, Col, Table } from 'react-bootstrap';
import _ from 'lodash';
import { data } from './data.js';



class App extends Component {
  constructor(props){
    super(props);

        this.state = {
            
        data: data,
        isSorted: [false, false, false, false, false, false]
        }
      
        this.sortItem = this.sortItem.bind(this);

    }

//make sort toggle-able (i.e. A-Z then Z-A) using an attribute on HeaderItem; manage it by state (ie. sorted = true) 
sortItem = (value, index) => {
    //is isSorted true or false?
    let isSortedItem = this.state.isSorted[index];

    //make some copies...
    let isSortedCopy = [...this.state.isSorted];
    let data = this.state.data;
    let dataCopy = Object.assign({}, data);
    
    //use lodash to sort, based on value of isSortedItem (boolean)
    let sorted; 
    isSortedItem ? sorted =  _.orderBy(dataCopy, [value], ['desc']) : sorted = _.sortBy(dataCopy, o => o[value]);

    //change the boolean value of isSorted, at the appropriate index
    isSortedCopy[index] = !isSortedItem;

   this.setState({
        data: sorted,
        isSorted: isSortedCopy
    })

}

render() {

    const dataProducts = (this.state.data).map((item, id) => {
        return (<tr key={id}>
                <td>{item.name}</td>
                <td>{item.menuCategory}</td>
                <td>{item.salesCategory}</td>
                <td>{item.menuPage}</td>
                <td>{item.salesRevenue}</td>
                <td>{item.quantitySold}</td>
            </tr>)
        });


    return (
      <div>
        <Row>
			<Col sm={8} smOffset={2} xs={11} xsOffset={1}>  
                <h1>TouchBistro React Challenge</h1>
                <h3>Click each heading to sort</h3>
                <Table bsStyle="table table-striped">
      
                    <Header 
                        sortItem = {this.sortItem}
                        sorted = {this.state.sorted}
                    />

                    <tfoot>
                        <tr>
                            <td colSpan="4" className="subtotal sum sumTitle">Sum</td>
                            <Sum type="salesRevenue"/> 
                            <Sum type="quantitySold" /> 
                        </tr>
                    </tfoot>            
                    <tbody>
                        { dataProducts }
                    </tbody>
                </Table>
            </Col>
        </Row>
      </div>
)}}

const Sum = ({ type }) => { 
    let sum = data.reduce((prevVal, item) => prevVal + item[type], 0)
    debugger; 
    return (<td className="sum">{sum}</td>)
};

const Header = (props) => {
    let headerNames = Object.keys(...data);
        return (
            <thead>
                <tr>

                {headerNames.map((item, index) => {
                let formattedHeading = _.startCase(item)
            
                return(
                    
                <HeaderItem key={index} index={index} item={item} name={formattedHeading} sortItem={props.sortItem} isSorted={props.sorted}/>)
                })}
                
                </tr>
                
            </thead> )   
 
            
    
}

const HeaderItem = (props) => {

    return (
        <th onClick={ () => props.sortItem(props.item, props.index)}>
            <a><h4>{props.name}</h4></a>
        </th>   
  )

}

export default App;
