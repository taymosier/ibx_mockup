import React, { Component } from 'react';
import SearchFilter from './SearchFilter.jsx';
import ProductCategoryFilter from './ProductCategoryFilter.jsx';

export default class ProductFilterContainer extends Component {
  constructor(props){
    super(props);
    this.state={

    };
  }
  render(){
    return(
      <div className="filterCntr">
        <SearchFilter handleSearch={this.props.handleSearch}/>
        <ProductCategoryFilter />
      </div>
    );
  }
}
