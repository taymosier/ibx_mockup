import React, { Component } from 'react';

export class NextButton extends Component{
  constructor(props) {
      super(props);
      this.state = {
        handleClick: this.props.handleClick
      };
  }
  render(){
    return(
      <div className="nextButton">
        <button onClick={this.state.handleClick} >
          <img src={require("assets/arrow.svg")}/>
        </button>
      </div>
    );
  }
}
