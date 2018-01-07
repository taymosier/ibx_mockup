import React, { Component } from 'react';
// import './styles/infoComponent.css';

export default class InfoComponent extends Component {
  render(){
    return(
      <div className="infoComponentBox">
        <h5>Inner Banks Paint and Decorating</h5>
        <p>252-758-7775</p>
        <p>innerbanks@homebuilders.com</p>
        <p>2025 A Eastgate Dr. Greenville, NC 27858</p>
      </div>
    );
  }
}
