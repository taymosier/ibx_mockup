import React, { Component } from 'react';
import {products} from './Products/ProductList.js';


import { Home } from './Home.jsx';
import { Products } from './Products/Products.jsx';
import { Location } from './Location/Location.jsx';
import { Specials } from './Specials.jsx';
import { Sundries} from './Sundries.jsx';
import { Events } from './Events.jsx';
import { ColorMatching } from './ColorMatching.jsx';

export default class  ActiveView extends Component {
  constructor(props){
    super(props);

  }

  render(){
    if (this.props.activeView) {
      switch (this.props.activeView) {
        case 'Home':
          return <Home />;
        case 'Products':
          return <Products items={products}/>;
        case 'Location & Hours':
          return <Location />;
        case 'Specials':
          return <Specials />;
        case 'Events':
          return <Events />;
        case 'Color Matching':
          return <ColorMatching />;
        case 'Sundries':
          return <Sundries />;
        default:
          return <Home />;
      }
    }
  }
}
