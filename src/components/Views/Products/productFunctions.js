export function handlePreviousButtonClick(e){
  e.preventDefault();
  console.log(this.state.productIndex);
  if(this.state.productIndex === 0){
    return null;
  } else {
    this.setState({
      productIndex: this.state.productIndex - 1,
    });
  }
}

export function handleNextButtonClick(e){
  console.log(this.state.productIndex);
  if(this.state.productIndex === (this.state.totalItems - 1)){
    return null;
  } else {
    this.setState({
      productIndex: this.state.productIndex + 1,
    });
  }
}

export function handleSearch(e){
  e.preventDefault();
  this.setState({
    search: e.target.value,
  })
}
