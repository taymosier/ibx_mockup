import React, { Component } from 'react';
import ActiveProduct from './ActiveProduct.jsx';
import {PreviousButton} from './PreviousButton.jsx';
import { NextButton } from './NextButton.jsx';
import {products} from './ProductList.js';
import { handlePreviousButtonClick, handleNextButtonClick } from './productFunctions.js';


export default class SearchBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      productIndex: 0,
      totalItems: products.length,
    };
    this.handlePreviousButtonClick = handlePreviousButtonClick.bind(this);
    this.handleNextButtonClick = handleNextButtonClick.bind(this);
  }

  render(){
    let productIndex = this.state.productIndex;
    let productName = `${products[productIndex].name}`;
    let description = `${products[productIndex].description}`;
    let image = `${products[productIndex].image}`;
    return(
      <div className="searchBox">
          {this.state.productIndex === 0
            ? null
            : <PreviousButton handleClick={this.handlePreviousButtonClick}/>
          }
          <ActiveProduct id={2} name={productName} description={description} image={image}/>
          {this.state.productIndex === (this.state.totalItems-1)
            ? null
            : <NextButton handleClick={this.handleNextButtonClick}/>
          }
      </div>
    );
  }
}
