import React, { Component } from 'react';
import { triggerActiveItemIDUpdate  } from './productFunctions.js';
const images = require.context('../../../assets', true);

export class ProductListItem extends Component {
  constructor(props){
    super(props);
      this.state = {
        product:  this.props.product,
        id: this.props.product.id,
      };
      this.triggerActiveItemIDUpdate = triggerActiveItemIDUpdate.bind(this);
  }

  render(){
    const product = this.props.product;
    const productImage = images(`./productsAssets/${product.image}`);
    const productIndex = `${product.id}`;
    return(
        <li className="prdLI" >
          <button onClick={this.triggerActiveItemIDUpdate} value={productIndex}>
            <div className="prdName">
              <p value={this.state.id}>{product.name}</p>
            </div>
            <div className="prdImg">
              <img src={productImage} alt={product.image} />
            </div>
        </button>
        </li>
    );
  }
}
