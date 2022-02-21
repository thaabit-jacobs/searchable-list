import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let items = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function filterBy(category){
  return items
        .filter(item => item.category === category); 
}

function Table(props){
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Contact</th>
      </tr>

      <tr>Sporting Goods</tr>
      <TableRowsData items={props.items} category="Sporting Goods"/>

      <tr>Electronics</tr>
      <TableRowsData items={props.items} category="Electronics"/>
    </table>
  );
}



function TableRowsData(props){
  return (
    props.items
    .filter(item => item.category === props.category)
    .map(item => {
        return (
          <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
        )
    })
  )
}

ReactDOM.render(
  <Table items={items}/>,
  document.getElementById('root')
);

reportWebVitals();
