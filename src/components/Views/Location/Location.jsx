import React, { Component } from 'react';
import MapsContainer from './MapsContainer.jsx';
import '../../styles/location.css';


export class Location extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="locationView">
        <h3>Location</h3>
        <MapsContainer />
      </div>
    );
  }
}
