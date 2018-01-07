import React, { Component } from 'react';

export default class SidebarBlurb extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className="sidebarBlurb">
        <h5>Is It Still Paint?</h5>
        <p>Technology isn’t something most people think of when it comes to paint, but at Benjamin Moore we’re constantly working to develop products that solve problems and make you rethink what paint can do. Since Benjamin Moore paint goes so far beyond your expectations of paint, it kind of makes you wonder...is it still paint?</p>
      </div>
    );
  }
}
