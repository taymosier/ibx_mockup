import React, { Component } from 'react';
import '../styles/colorMatching.css';


export class ColorMatching extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="colorMatchingView">
        <h3>Color Matching</h3>
        <div id="imgCntr">
          <img src={require("../../assets/colorMatchingAssets/creepykid.jpg")} alt="colormatching image"></img>
        </div>
      </div>
    );
  }
}
