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
  console.log(e);
  this.setState({
    search: e.target.value.toLowerCase(),
  })
}

// export function handleItemClick(e){
//   e.preventDefault();
//   console.log(`${e.target.value}`);
//   this.setState({
//     productIndex: 2,
//   });
// }

// Bound to Product List Item --- Passes Item ID to Product List Component
export function triggerActiveItemIDUpdate(e){

  e.preventDefault();
  console.log('trigger called');
  const selectedItemID = this.props.product.id;
  this.props.selectedItemIDToList(selectedItemID);
}

// Bound to Product List Component
// --- Passes Selected Product List Item Id To Products View
export function passSelectedItemID(selectedItemID){
  console.log('passSelectedItemID function called');
  this.props.selectedItemIDToProductsView(selectedItemID);
}

// Bound to Products View
// --- Updates productIndex With selectedItemId Passed From Product List
export function updateActiveItem(selectedItemID){
  console.log('update called');
  this.setState({
    productIndex: selectedItemID
  });
}


export function selectedItemIDFromItemToList(selectedItemID) {
  this.props.selectedItemId(selectedItemID);
}

export function selectedItemIDFromListToProductsView(selectedItemID){
  this.props.selectedItemID(selectedItemID);
}
