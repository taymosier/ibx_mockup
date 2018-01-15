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
    console.log(`currentIndex is ${this.state.productIndex}`);
    console.log(`total items is ${this.state.totalItems}`);
    return null;
  } else {
    console.log(`currentIndex is ${this.state.productIndex}`);
    console.log(`total items is ${this.state.totalItems}`);
    this.setState({
      productIndex: this.state.productIndex + 1,
    });
  }
}
