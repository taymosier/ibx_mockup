import React, { Component } from 'react';
import MenuItem from './MenuItem.jsx';
import './styles/menu.css';

export class Menu extends Component {
  render() {
    const pages = ['Home', 'Products', 'Location & Hours', 'Specials', 'Events', 'Color Matching', 'Sundries'];
    const listPages = pages.map(page =>
      (
        <MenuItem
          className="menuItem"
          itemText={page}
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
