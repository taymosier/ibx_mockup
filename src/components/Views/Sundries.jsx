import React, { Component } from 'react';
import '../styles/sundries.css';


export class Sundries extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="sundriesView">
         <div className="sundriesContent">
          <div className="sundriesContentSection">
            <p className="sectionText">We carry a full line of Merit Pro Sundries, Merit Pro is a line of painting tools and accessories that was created with the highest standards, offering high quality products for a low price! We carry a wide variety of Merit Pro products to reduce your work time and provide you excellent results.</p>
            <img className="sectionImage" src={require('assets/sundriesAssets/p1.JPG')} alt="image1"/>
          </div>
          <div className="sundriesContentSection">
            <p>We also carry a full line of Purdy Brushes and Roller Covers. they offer a broad assortment of brushes, roller covers and paint accessories. Selecting the right tools for any project is a critical step in creating an exceptional painting experience for both professional painters and do- it -yourselfers.</p>
            <img src={require('assets/sundriesAssets/p2.JPG')} alt="image1"/>
          </div>
          <div className="sundriesContentSection">
            <p>Old Masters has been around since 1953, they create a high quality stain that comes in all forms like gel, wiping, penetrating and many different versions of urethane. Their products were created to spark your imagination, work harder and last longer. We carry a wide variety of all their products and if it’s not in the store we can always order it for you!</p>
            <img src={require('assets/sundriesAssets/p3.JPG')} alt="image1"/>
          </div>
        </div>
      </div>
    );
  }
}
