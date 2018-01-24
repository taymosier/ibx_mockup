import React, { Component } from 'react';
import ActiveProductContainer from './ActiveProductContainer.jsx';
import SearchFilter from './SearchFilter.jsx';
import ProductFilterContainer from './ProductFilterContainer.jsx';
import ProductListView from './ProductListView.jsx';
import {products} from "./ProductList.js";
import { handleSearch, updateActiveItem } from './productFunctions.js';
import '../../styles/products.css';

// TODO

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      productIndex: 0,
    };
    this.handleSearch = handleSearch.bind(this);
    this.updateActiveItem = updateActiveItem.bind(this);
  }

  render(){
    const search = this.state.search;
    let productSelection = this.props.items;

    if(search.length > 0){
      productSelection = productSelection.filter(function(product) {
        return product.name.toLowerCase().match( search );
      });
    }
    return(
      <div className="productsView">
        <img className="productsBanner" src={require("assets/productsAssets/banner.jpg")} height="203px" width="733px" alt="Benjamin Moore Paints" />
        <h3>Products</h3>
        {/* <SearchFilter handleSearch={this.handleSearch}/> */}
        <ProductFilterContainer handleSearch={this.handleSearch}/>
        <ActiveProductContainer productIndex={this.state.productIndex}/>
        <ProductListView selectedItemIDToProductsView={this.updateActiveItem} products={productSelection} />
      </div>
    );
  }
}
