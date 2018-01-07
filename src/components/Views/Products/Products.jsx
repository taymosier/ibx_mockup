import React, { Component } from 'react';
import SearchBox from './SearchBox.jsx';
import '../../styles/products.css';

// TODO
// Change positioning for major elements to absolute

export class Products extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="productsView">
        <img className="productsBanner" src={require("assets/productsAssets/banner.jpg")} height="203px" width="733px" alt="Benjamin Moore Paints" />
        <h3>Products</h3>
        <SearchBox />
      </div>
    );
  }
}
