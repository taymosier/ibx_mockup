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
        <h3>Location & Hours</h3>
          <div className="leftColumn">
            <h4>Hours:</h4>
            <br />
            <p>Monday-Friday:</p>
            <p>7:00am - 430pm</p>
            <p>Saturday</p>
            <p>8:00am - 1pm</p>
            <br />
            <p>Sunday</p>
            <p>Closed</p>
            <br />
            <p>Phone:</p>
            <p>252-758-7775</p>
            <br />
            <p>Fax:</p>
            <p>252-758-7772</p>
            <br />
            <p>Address:</p>
            <p>2025 A Eastgate Dr</p>
            <p>Greenville, NC 27858</p>
          </div>

          <div className="rightColumn">
            <MapsContainer className="mapContainer"/>
          </div>

}
