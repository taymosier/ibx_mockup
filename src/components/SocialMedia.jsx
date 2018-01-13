import React, { Component } from 'react';
import './styles/sidebar.css';

export default class SocialMedia extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }


  render(){
    return(
      <div className="socialMedia">
        <ul>
          <li className="fbElement">
            <button id="fbButton">
              <a href="https://facebook.com/IBXPaint">
                <img className="fbLogo" src={require('../assets/fb.png')} alt="facebook" />
              </a>
            </button>
          </li>
          <li className="igElement">
            <button id="igButton">
              <a href="https://www.instagram.com/innerbankspaint/">
                <img className="fbLogo" src={require('../assets/ig.png')} alt="isntagram" />
              </a>
            </button>
          </li>
          <li className="houzzElement">
            <button id="houzzButton">
              <a href="https://www.houzz.com/pro/krystal34/inner-banks-paint-and-decorating">
                <img className="fbLogo" src={require('../assets/houzz.png')} alt="houzz" />
              </a>
            </button>
          </li>
          <li className="pinterestElement">
            <button id="pinterestButton">
              <a href="https://www.pinterest.com/innerbanksp0529/">
                <img className="fbLogo" src={require('../assets/social-pinterest-2.svg')} alt="pinterest" />
              </a>
            </button>
          </li>
        </ul>
      </div>
    );
  }

}
