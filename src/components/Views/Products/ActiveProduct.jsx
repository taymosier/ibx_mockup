import React, {Component} from 'react';
const images = require.context('../../../assets', true);

export default class ActiveProduct extends Component {
  constructor(props){
    super(props);
    this.state={
      id: this.props.id,
      name: this.props.name,
      description: this.props.description,
      url: this.props.image
    };
  }

  render(){
    let productId = this.props.id;
    let productName = this.props.name;
    let productDescription = this.props.description;
    const productImage = images(`./productsAssets/${this.props.image}`);
    console.log(productImage);
    return(
        <div className="activeProduct">
          <div className="activeProductTopRow">
            <h1 className="productHeader">{productName}</h1>
            <img className="productPicture" src={productImage} alt="productImage"></img>
          </div>
          <div className="activeProductBottomRow">
            <p className="productDescription">{productDescription}</p>
          </div>
        </div>
    );
  }
}
