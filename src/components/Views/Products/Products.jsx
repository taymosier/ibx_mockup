import React, { Component } from 'react';
import SearchBox from './SearchBox.jsx';
import '../../styles/products.css';
import {products} from "./ProductList.js";

// TODO
// Change positioning for major elements to absolute

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputString: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getInitialState(){
      return { inputString: 'Hello' };
  }

  handleChange(e){
    this.setState({ inputString: e.target.value});


  }

  render(){
    const inputString = this.state.inputString;
    let productSelection = this.props.items;

    if(inputString.length > 0){
      productSelection = productSelection.filter(function(product) {
        return product.name.toLowerCase().match( inputString );
      });
    }



    return(
      <div className="productsView">
        <img className="productsBanner" src={require("assets/productsAssets/banner.jpg")} height="203px" width="733px" alt="Benjamin Moore Paints" />
        <h3>Products</h3>
        {/* <input type="text" value={this.state.inputText} placeholder="Type Something" onChange={this.handleChange}/>
        <ul>
          { productSelection.map(function(product){
            return <li>{product.name}</li>
          })}
        </ul> */}
        <SearchBox />
      </div>
    );
  }
}
