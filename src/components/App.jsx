import React, { Component } from 'react';
import Header from './Header.jsx';
import ActiveView from './Views/ActiveView.jsx';
import Footer from './Footer.jsx';
import Sidebar from './Sidebar.jsx';
import { setNewActiveView } from './functions/appFunctions.js';

import './styles/App.css';

// TODO
// Adjust width of home page so that horizontal scrollbar is non-existent (adjust width of banner image)
// Adjust menu button styling
// Expand size of main home Views
// change infoComponentBox padding top to .25vh
// change infoCompnentBox h5 hieght to .5vh
// "                      " margin to .25vh 0 0 0
// change infoCompnentBox p margin to .25vh 1vw 0 1vw
// change homePageLinks p padding to 0 4vw 0 4vw
// change homePageLinks p height to 15vh
// style map
//

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeView: 'Sundries',
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
