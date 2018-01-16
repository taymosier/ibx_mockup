import React, { Component } from 'react';
import SearchBox from './SearchBox.jsx';
import SearchFilter from './SearchFilter.jsx';
import ProductFilterContainer from './ProductFilterContainer.jsx';
import ProductListView from './ProductListView.jsx';
import {products} from "./ProductList.js";
import { handleSearch } from './productFunctions.js';
import '../../styles/products.css';

// TODO

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.handleSearch = handleSearch.bind(this);
  }

  handleChange(e){
    this.setState({ search: e.target.value});
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
        <SearchBox />
        <ProductListView products={productSelection}/>
      </div>
    );
  }
}
