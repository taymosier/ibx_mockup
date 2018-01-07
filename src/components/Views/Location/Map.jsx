import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Map extends Component {
  componentDidUpdate(prevProps, prevState){
    // if (prevProps.google !== this.props.google || prevProps.quakes !== this.props.quakes){
      this.loadMap();
    // }
  }

  loadMap() {
    // if (this.props && this.props.google ){
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const mapConfig = Object.assign({}, {
        center: {lat: 35.597825, lng: -77.330829},
        zoom: 17,
        gestureHandling: 'cooperative',
        mapTypeId: 'roadmap'
      });
      this.map = new maps.Map(node, mapConfig);

      const marker = new google.maps.Marker({
        position: {lat: 35.597825, lng: -77.330829},
        map: this.map,
        title: 'Inner Banks Paint and Decorating'
      });
    // }
  }

  render(){
    const style = {
      width: '25vw',
      height: '50vh'
    }

    return(
        <div ref="map" style={style}>
          loading map...
        </div>
    );
  }
}
