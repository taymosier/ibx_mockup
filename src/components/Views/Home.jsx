import React, { Component } from 'react';
import '../styles/home.css';

export class Home extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="homeView">
        <div className="homeContent">
          <div className="homeBanner">
            <img src={require('assets/homeAssets/banner.jpg')} alt="homeBannerImage" />
          </div>
          <div className="homeWelcome">
            <h4>Welcome!</h4>
            <h5>Serving Greenville, NC and the beautiful Inner Banks since 2008.</h5>
            <div className="mainWelcomeText">
              <p>A locally owned Benjamin Moore Signature Store located off of 10th Street on Eastgate Drive in Greenville we live for Color, Creativity, and Crisp Trim Lines.  We are here to help you complete your next project!</p>
              <p>Carrying the full line of premium, innovative Benjamin Moore paints & stains we also offer expert Color Matching and Color Consultations.  With over 20 years of combined experience in the painting industry we look forward to pairing you with the perfect paint color and the right product to meet your needs. </p>
              <p>Come see us and let us make painting fun again!</p>
            </div>
            <div className="benMooreTagline">
              <img src={require("assets/homeAssets/bmhomelogo.png")} alt />
              <p>"Your space, your style, your Benjamin Moore. Everything you need to create an environment that you love."</p>
            </div>
          </div>

          <div className="homePageLinks">
            <ul>
              <li>
                <h6>Benjamin Moore Products</h6>
                <img  src={require("assets/homeAssets/pour.jpg")} alt="pourImage" />
                <p>We offer a complete line of Benjamin Moore® products for virtually every project you have. From surface preparation products, to a wide array of coatings in sheens and formulas for every requirement. Whatever the job demands, we have what you need.</p>
                <button>Learn More</button>
              </li>
              <li>
                <h6>Colorful Chalkboard Paint</h6>
                <img src={require("assets/homeAssets/chalk.jpg")} alt="chalkImage"></img>
                <p>Turn any surface into a washable, erasable chalkboard―in any color! See fun and easy chalkboard paint ideas for your home.</p>
                <button>Get Ideas</button>
              </li>
              <li>
                <h6>Color Trends 2018</h6>
                <img src={require("assets/homeAssets/trend.jpg")} alt="trendImage"></img>
                <p>Benjamin Moore’s Color of the Year, Caliente AF-290, is strong, radiant and full of energy.</p>
                <button>View Colors</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

    );
  }
}
