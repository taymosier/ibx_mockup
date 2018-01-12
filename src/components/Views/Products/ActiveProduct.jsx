import React, {Component} from 'react';

export default class ActiveProduct extends Component {
  constructor(props){
    super(props);
    this.state={
      id: this.props.id,
      name: this.props.name,
      description: this.props.description
    };
  }

  render(){
    return(
      <div>
        <p>{this.state.id}</p>
        <p>{this.state.name}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
