import React, { Component } from 'react';
import {products} from './ProductList.js';

export default class SearchBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      productId: 2,
      productName: '',
      productDescription: '',
    };
  }

  render(){
    const productList = products.map( (product) => (<div><h5>{product.name}</h5></div>) );
    console.log(products[0]);
    return(
      <div className="searchBox">
        <div className="previousButton"><img src={require("assets/arrow.svg")}/></div>
        <div className="activeProduct">
          <h1>{products[this.state.productId].name}</h1>
          <img src={require(`assets/productsAssets/p${this.state.productId}.png`)}></img>
          <p>{products[this.state.productId].description}</p>
        </div>
        <div className="nextButton"><img src={require("assets/arrow.svg")}/></div>
      </div>
    );
  }
}
