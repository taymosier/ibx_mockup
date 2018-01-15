import React, {Component} from 'react';


export default class SearchFilter extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: this.props.search,
      handleSearch: this.props.handleSearch
    };
  }
  render(){
    return(
      <div>
        <input type="text" value={this.state.search} onChange={this.state.handleSearch}></input>
      </div>
    );
  }
}
