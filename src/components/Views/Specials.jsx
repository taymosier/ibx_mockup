import React, { Component } from 'react';
import '../styles/specials.css';


export class Specials extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="specialsView">
        Specials
        <img src={require("../../assets/specialsAssets/freepaint.png") } alt="free sample" />
      </div>
    );
  }
}
