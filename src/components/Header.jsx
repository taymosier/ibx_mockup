import React, { Component } from 'react';
import './styles/header.css';

export default class Header extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="header">
        <div className="bmlogo">
          <img src={require('assets/bmlogo.png')} alt="bmlogoImage" />
        </div>
        <div className="ibxlogo">
          <img src={require('assets/ibxlogo.png')} alt="ibxlogoImage" />
        </div>
      </div>
    );
  }
}
