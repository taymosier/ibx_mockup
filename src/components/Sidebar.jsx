import React, { Component } from 'react';
import Menu from './Menu.jsx';
import InfoComponent from './InfoComponent.jsx';
import SidebarBlurb from './SidebarBlurb.jsx';
import SocialMedia from './SocialMedia.jsx';

export default class Sidebar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="sidebar">
        <Menu />
        <InfoComponent className="infoComponent"/>
        <SidebarBlurb />
        <SocialMedia />
      </div>
    );
  }
}
