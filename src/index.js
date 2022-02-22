import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class SearchForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = 
    {
      items: [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
      ]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let searchTerm = event.target.value;

    this.setState(
        prevSate => ({
          items: prevSate.filter(item => item.name.indexOf(searchTerm) !== -1)
        })
    );

  }

  render() {
    return (
      <div>
        <fieldset>
          <label>
            Name:
            <input type="text" onChange={this.handleChange} />
          </label>
        </fieldset>


      <Table items={this.state.items}/>
      </div>
    );
  }
}

function Table(props){
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Contact</th>
      </tr>

    
      <tr>
        <td>Sporting Goods</td>
      </tr>
      <TableRowsData items={props.items} category="Sporting Goods"/>

      <tr>
        <td>Electronics</td>
      </tr>
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
  <SearchForm />,
  document.getElementById('root')
);

reportWebVitals();
