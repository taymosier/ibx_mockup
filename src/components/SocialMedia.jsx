import React, { Component } from 'react';
// import './styles/socialMedia.css';

export default class SocialMedia extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }


  render(){
    return(
      <div className="socialMedia">
        <ul>
          <li className="fbElement"><img className="fbLogo" src={require('../assets/fb.png')} alt="facebook" /></li>
          <li className="igElement"><img className="fbLogo" src={require('../assets/ig.png')} alt="isntagram" /></li>
          <li className="houzzElement"><img className="fbLogo" src={require('../assets/houzz.png')} alt="houzz" /></li>
          <li className="pinterestElement"><img className="fbLogo" src={require('../assets/social-pinterest-2.svg')} alt="pinterest" /></li>
        </ul>
      </div>
    );
  }

}
