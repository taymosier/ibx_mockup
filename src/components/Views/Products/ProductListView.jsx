import React, { Component } from 'react';
import { ProductListItem } from './ProductListItem.jsx';
import { passSelectedItemID } from './productFunctions.js';

export default class ProductListView extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: this.props.products,
    }
    this.passSelectedItemID = passSelectedItemID.bind(this);
  }
  render(){

    let products = this.props.products;
    let productList = products.map(product => (
      <ProductListItem
        selectedItemIDToList = {this.passSelectedItemID}
        product={product}
      />
    ));
    return(
      <div className="prdListCntr">
        <ul className="prdList">
          {productList}
        </ul>
      </div>
    );
  }
}
