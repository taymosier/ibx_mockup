import React, { Component } from 'react';
import SearchBox from './SearchBox.jsx';
import '../../styles/products.css';


export class Products extends Component {
  constructor(props) {
    super(props);
  }

  render(){


    return(
      <div className="productsView">
        <h3>Products</h3>
        <SearchBox />
      </div>
    );
  }
}
