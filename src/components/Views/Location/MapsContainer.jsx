import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map } from './Map.jsx'
import { GoogleApiWrapper } from 'google-maps-react';

class  MapsContainer extends Component {
  render(){
    return(
      <div className="mapsContainer">
        <div className="wrapper">
            <Map google={this.props.google}/>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBnX-0_b4ypULX2AOlSctjHzfvmy2b3l3o'
}) (MapsContainer)
