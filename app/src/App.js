import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, Table } from 'react-bootstrap';
import _ from 'lodash'

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

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: data,
      //names:  Object.values(data).map( item => item.name )
 
    }
      //bind functions here
      this.sortItem=this.sortItem.bind(this);
    
    }

    //functions go here
sortItem = (e) => {
    e.preventDefault();
//make a copy of data object
    let __data = Object.assign({}, this.state.data);
//use lodash to sort
   let sorted =  _.sortBy(__data, o => o.name);


debugger; 

    this.setState({
        data: sorted
        
    })
  
}

  render(props) {
//use this to get header names dynamically
//const headers = Object.keys(data[0]);

//what if there are 2 map functions, the 1st iterates over item; the 2nd iterates over each item and 
//dumps object.values or whatever for each category
//sortable categories will be managed by state



const dataProducts = this.state.data.map((item) => {
    return (<tr key={item.index}>
              <td>{item.name}</td>
              <td>{item.menuCategory}</td>
              <td>{item.salesCategory}</td>
              <td>{item.menuPage}</td>
              <td>{item.salesRevenue}</td>
              <td>{item.quantitySold}</td>
          </tr>)
});
//create JSX elements & use .reduce to sum values for sales and quantity. Could we/should we move these to a class?
const SumSalesRevenue = () => { 
    let sum = data.reduce((prevVal, item) => prevVal + item.salesRevenue, 0)
    return (<td>{sum}</td>)
};
 
const SumQuantitySold = () => {
    let sum = data.reduce((prevVal, item) => prevVal + item.quantitySold, 0)
    return (<td>{sum}</td>)
};

    return (
      <div>
        <h1>React Challenge</h1>
        <Table bsStyle="table table-striped">
        <thead>
            <tr>
            <NameHeader sortItem={this.sortItem}/>    
            <th scope="col">Menu Category</th>
            <th scope="col">Sales Category</th>
            <th scope="col">Menu Pages</th>
            <th scope="col">Sales Revenue</th>
            <th scope="col">Quantity Sold</th>
            </tr>
        </thead>
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
      </div>
)}}

class NameHeader extends Component {
   render() {
      return (
            <th className="sortName" onClick={(e)=>this.props.sortItem(e)} scope="col">
                <a>Name</a>
            </th>    
      )}
}

// class DataProducts extends Component {
//     render() { 

        

//         return (
//         )
        
//     }
// }
export default App;
