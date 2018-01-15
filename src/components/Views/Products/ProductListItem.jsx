import React, { Component } from 'react';
const images = require.context('../../../assets', true);


export class ProductListItem extends Component {
  constructor(props){
    super(props);
      this.state = {
        product:  this.props.product,
      };
  }

  render(){
    const product = this.props.product;
    const productImage = images(`./productsAssets/${product.image}`);

    return(
        <li>
          <div>
            {product.name}
          </div>
          <div>
            <img src={productImage} alt={product.image}/>
          </div>
        </li>
    );
  }
}
