import React, { Component } from 'react';

export default class Footer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="footer">
        <p>2019 Benjamin Moore</p>
        <p>Disclaimer</p>
        <a href='#'>Privacy Policy </a>
        <a href='#'>Terms and Conditions</a>
      </div>
    );
  }
}
