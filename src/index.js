import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let items =  [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class SearchForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = 
    {
      filteredItems: items
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChange(event) {
    let searchTerm = event.target.value;
  
    if(searchTerm !== ""){
      this.setState({
        filteredItems: items.filter(item => item.name.indexOf(searchTerm) !== -1)
      })
  } 
  else {
    this.setState({
      filteredItems: items
    })
  }
}

  handleChecked(event){
    let isChecked = event.target.checked;
   
    if(isChecked){
      this.setState({
        filteredItems: items.filter(item => item.stocked)
      })
    }else {
      this.setState({
        filteredItems: items
      })
    }
  }

  render() {
    return (
      <div>
        <fieldset>
          <label>
            Name:
            <input type="text" onChange={this.handleChange} />
          </label>

          <label>
            Only show products in stock
            <input type="checkbox" onChange={this.handleChecked} />
          </label>
        </fieldset>


      <Table items={this.state.filteredItems}/>
      </div>
    );
  }
}

function Table(props){
  return (
    <table>
      <tr  className='mb-1'>
        <th  className='bold'>Name</th>
        <th  className='bold'>Contact</th>
      </tr>

    
      <tr className='mb-1'>
        <td className='bold'>Sporting Goods</td>
      </tr>
      <TableRowsData items={props.items} category="Sporting Goods"/>

      <tr className='mb-1'>
        <td  className='bold'>Electronics</td>
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
          <tr key={item.name}>
            <td className={!item.stocked && 'out-stock bold'}>{item.name}</td>
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
