import React, { Component } from 'react';
import MenuItem from './MenuItem.jsx';
import { passSelectedViewToSidebar } from './functions/appFunctions.js';

export class Menu extends Component {
  constructor(props){
    super(props);
    this.passSelectedViewToSidebar = passSelectedViewToSidebar.bind(this);
  }
  render() {
    const pages = ['Home', 'Products', 'Location & Hours', 'Specials', 'Events', 'Color Matching', 'Sundries'];
    const listPages = pages.map(page =>
      (
        <MenuItem
          className="menuItem"
          itemText={page}
          passSelectedViewToMenu={this.passSelectedViewToSidebar}
        />
      ));
    return(
      <ul className="menuUL">
        {listPages}
      </ul>
    );
  }
}

export default Menu;
