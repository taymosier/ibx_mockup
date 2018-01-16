import React, { Component } from 'react';

export default class ProductCategoryFilter extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='ctgFltCntr'>
        <label className='ctgFltLabel'>Category Filter</label>
        <select className='ctgFlt' placeholder='Category'>
          <option className='ctgFltItem'>All</option>
          <option className='ctgFltItem'>Interior</option>
          <option className='ctgFltItem'>Exterior</option>
          <option className='ctgFltItem'>Other</option>
        </select>
      </div>
    );
  }
}
