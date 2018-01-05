import React, { Component } from 'react';
import { handleMenuItemClick } from './functions/appFunctions.js';


export default class MenuItem extends Component {
  constructor(props){
    super(props);
    this.handleMenuItemClick = handleMenuItemClick.bind(this);
  }
  render(){
    return(
      <li onClick={this.handleMenuItemClick}>{this.props.itemText}</li>
    );
  }
}
