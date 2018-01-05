import React, { Component } from 'react';
import Menu from './Menu.jsx';
import InfoComponent from './InfoComponent.jsx';
import SidebarBlurb from './SidebarBlurb.jsx';
import SocialMedia from './SocialMedia.jsx';
import { passSelectedViewToApp } from './functions/appFunctions.js';

export default class Sidebar extends Component {
  constructor(props){
    super(props);
    this.passSelectedViewToApp = passSelectedViewToApp.bind(this);
  }

  render(){
    return(
      <div className="sidebar">
        <Menu getSelectedView={this.passSelectedViewToApp}/>
        <InfoComponent className="infoComponent"/>
        <SidebarBlurb />
        <SocialMedia />
      </div>
    );
  }
}
