import React, { Component } from 'react';

export default class MenuItem extends Component {
  render(){
    return(
      <li>{this.props.itemText}</li>
    );
  }
}
