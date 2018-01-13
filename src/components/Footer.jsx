import React, { Component } from 'react';

export default class Footer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="footer">
        <p>@1996-2013 Benjamin Moore & Co.</p>
        <p>Note: On-screen and printer color representations may vary from actual paint colors</p>
        <a href='http://ibxpaint.com/home/privacy/privacy/sb.cn'>Privacy Policy </a>
        <a href='http://ibxpaint.com/home/terms/terms/sb.cn'>Terms and Conditions</a>
      </div>
    );
  }
}
