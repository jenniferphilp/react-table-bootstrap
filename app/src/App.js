import React, { Component } from 'react';
import './App.css';
import { Row, Col, Table } from 'react-bootstrap';
import _ from 'lodash';


const data = [
  { name: 'Veggie Burger', menuCategory: 'Burgers', salesCategory: 'Food', menuPage: 'Dinner', salesRevenue: 40, quantitySold: 4 },
  { name: 'Spicy Burger', menuCategory: 'Burgers', salesCategory: 'Food', menuPage: 'Dinner', salesRevenue: 20, quantitySold: 2 },
  { name: 'Portobello Sandwich', menuCategory: 'Sandwiches', salesCategory: 'Food', menuPage: 'Dinner', salesRevenue: 0, quantitySold: 0 },
  { name: 'Pabst Blue Ribbon', menuCategory: 'Beers', salesCategory: 'Alcohol', menuPage: 'Drinks', salesRevenue: 100, quantitySold: 50 },
  { name: 'Nickel Brook Head Stock', menuCategory: 'Beers', salesCategory: 'Alcohol', menuPage: 'Drinks', salesRevenue: 96, quantitySold: 12 },
  { name: 'Laphroaig', menuCategory: 'Scotches', salesCategory: 'Alcohol', menuPage: 'Drinks', salesRevenue: 0, quantitySold: 0 },
  { name: 'Lagavulin 16', menuCategory: 'Scotches', salesCategory: 'Alcohol', menuPage: 'Drinks', salesRevenue: 60, quantitySold: 4 },
  { name: 'Johnny Blue', menuCategory: 'Scotches', salesCategory: 'Alcohol', menuPage: 'Drinks', salesRevenue: 20, quantitySold: 1 },
  { name: 'Johnny Black', menuCategory: 'Scotches', salesCategory: 'Alcohol', menuPage: 'Drinks', salesRevenue: 0, quantitySold: 0 },
  { name: 'Hops and Robbers', menuCategory: 'Beers', salesCategory: 'Alcohol', menuPage: 'Drinks', salesRevenue: 121, quantitySold: 13 },
  { name: 'Granite Peculiar', menuCategory: 'Beers', salesCategory: 'Alcohol', menuPage: 'Drinks', salesRevenue: 50, quantitySold: 6 },
  { name: 'Glenmorangie', menuCategory: 'Scotches', salesCategory: 'Alcohol', menuPage: 'Drinks', salesRevenue: 0, quantitySold: 0 },
  { name: 'Glenfiddich', menuCategory: 'Scotches', salesCategory: 'Alcohol', menuPage: 'Drinks', salesRevenue: 0, quantitySold: 0 },
  { name: 'GLB Canuck', menuCategory: 'Beers', salesCategory: 'Alcohol', menuPage: 'Drinks', salesRevenue: 9, quantitySold: 1 },
  { name: 'DAB', menuCategory: 'Beers', salesCategory: 'Alcohol', menuPage: 'Drinks', salesRevenue: 438, quantitySold: 91 },
  { name: 'Club Sandwich', menuCategory: 'Sandwiches', salesCategory: 'Food', menuPage: 'Dinner', salesRevenue: 18, quantitySold: 2 },
  { name: 'Ceasar Wrap', menuCategory: 'Sandwiches', salesCategory: 'Food', menuPage: 'Dinner', salesRevenue: 45, quantitySold: 5 },
  { name: 'Bacon Burger', menuCategory: 'Burgers', salesCategory: 'Food', menuPage: 'Dinner', salesRevenue: 60, quantitySold: 6 },
]

class App extends React.Component {
  constructor(props){
    super(props);

        this.state = {
        data: data
        }

        this.sortItem = this.sortItem.bind(this);

    }

sortItem = (value) => {
    //make a copy of data object
    let data = this.state.data; 
    let copy = Object.assign({}, data);

    //use lodash to sort
   let sorted =  _.sortBy(copy, o => o[value]);

    this.setState({
        data: sorted
    })
}

handleChange = (e) => {
    debugger; 
    this.setState({
        text: e.target.value
    })
}

render() {

    const dataProducts = (this.state.data).map((item, index) => {
        return (<tr key={index}>
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
			<Col xs={10} xsOffset={1}>  
                <h1>TouchBistro React Challenge</h1>
                <h2>Click each heading to sort</h2>
                <Table bsStyle="table table-striped">
      
                    <Header 
                        sortItem = {this.sortItem}
                        
                    />

                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="subtotal">Sum</td>
                            <SumSalesRevenue /> 
                            <SumQuantitySold /> 
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

const SumSalesRevenue = () => { 
    let sum = data.reduce((prevVal, item) => prevVal + item.salesRevenue, 0)
    return (<td>{sum}</td>)
};
 
const SumQuantitySold = () => {
    let sum = data.reduce((prevVal, item) => prevVal + item.quantitySold, 0)
    return (<td>{sum}</td>)
};

const Header = (props) => {
    let headerNames = Object.keys(...data);
        return (
            <thead>
                <tr>

                {headerNames.map((item, index) => {
                let formattedHeading = _.startCase(item)
                return(
                <HeaderItem key={index} item={item} name={formattedHeading} sortItem={props.sortItem} />)
                })}
                    
                </tr>
            </thead> )   
    
}


const HeaderItem = (props) => {
    return (
        <th className="" onClick={ () => props.sortItem(props.item) }>
            <a><h3>{props.name}</h3></a>
        </th>   
  )
}

export default App;
