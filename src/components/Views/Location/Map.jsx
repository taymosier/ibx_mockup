import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Map extends Component {
  componentDidUpdate(prevProps, prevState){
      this.loadMap();
  }

  loadMap() {
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const mapConfig = Object.assign({}, {
        center: {lat: 35.597825, lng: -77.330829},
        zoom: 16,
        gestureHandling: 'cooperative',
        mapTypeId: 'roadmap',
        disableDefaultUI: true,
      });
      this.map = new maps.Map(node, mapConfig);

      const marker = new google.maps.Marker({
        position: {lat: 35.597825, lng: -77.330829},
        map: this.map,
        title: 'Inner Banks Paint and Decorating'
      });
  }

  render(){
    return(
        <div className="googleMap" ref="map" >
          loading map...
        </div>
    );
  }
}
