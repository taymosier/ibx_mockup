import React, { Component } from 'react';
import Header from './Header.jsx';
import ActiveView from './Views/ActiveView.jsx';
import Footer from './Footer.jsx';
import Sidebar from './Sidebar.jsx';
import { setNewActiveView } from './functions/appFunctions.js';

import './styles/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeView: 'Home',
    };
    this.setNewActiveView = setNewActiveView.bind(this);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar getNewActiveView={this.setNewActiveView}/>
        <ActiveView activeView={this.state.activeView}/>
        <Footer />
      </div>
    );
  }
}

export default App;
