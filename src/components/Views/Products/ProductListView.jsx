import React, { Component } from 'react';
import { ProductListItem } from './ProductListItem.jsx';


export default class ProductListView extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: this.props.products,
    }
  }
  render(){
    let products = this.props.products;
    let productList = products.map(product => (
      <ProductListItem
        product={product}
      />
    ));
    console.log('list rendering');
    return(
      <div>
        HI
        <ul>
          {productList}
        </ul>
      </div>
    );
  }
}
