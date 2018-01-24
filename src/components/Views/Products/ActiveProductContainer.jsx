import React, { Component } from 'react';
import ActiveProduct from './ActiveProduct.jsx';
import {PreviousButton} from './PreviousButton.jsx';
import { NextButton } from './NextButton.jsx';
import {products} from './ProductList.js';
import { handlePreviousButtonClick, handleNextButtonClick } from './productFunctions.js';


export default class ActiveProductContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      productIndex: this.props.productIndex,
      totalItems: products.length,
      search: '',
    };
    this.handlePreviousButtonClick = handlePreviousButtonClick.bind(this);
    this.handleNextButtonClick = handleNextButtonClick.bind(this);
  }

  render(){
    let productIndex = this.props.productIndex;
    let productName = `${products[productIndex].name}`;
    let description = `${products[productIndex].description}`;
    let image = `${products[productIndex].image}`;
    return(

      <div className="activeProductContainer">
          {this.state.productIndex === 0
            ? null
            // : <PreviousButton handleClick={this.handlePreviousButtonClick}/>
            : null
          }

          <ActiveProduct id={productIndex} name={productName} description={description} image={image}/>

          {this.state.productIndex === (this.state.totalItems-1)
            ? null
            // : <NextButton handleClick={this.handleNextButtonClick}/>
            : null

          }
      </div>
    );
  }
}
