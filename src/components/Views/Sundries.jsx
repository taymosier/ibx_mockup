import React, { Component } from 'react';
import '../styles/sundries.css';


export class Sundries extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      // {/* <img id="topImg" className="sectionImage" src={require('assets/sundriesAssets/p1.JPG')} alt="image1"/> */}
      // <img id="midImg" src={require('assets/sundriesAssets/p2.JPG')} alt="image1"/>
      // <img id="btmImg" src={require('assets/sundriesAssets/p3.JPG')} alt="image1"/>
      <div className="sundriesView">
         <div id="topSctn">
            top
         </div>
         <div id="midSctn">
            mid
         </div>
         <div id="btmSctn">
           bottom
         </div>
      </div>
    );
  }
}
