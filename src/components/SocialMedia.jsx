import React, { Component } from 'react';

export default class SocialMedia extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }


  render(){
    return(
      <div>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Houzz</li>
          <li>Pinterest</li>
        </ul>
      </div>
    );
  }

}
