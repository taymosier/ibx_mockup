export function handleMenuItemClick(e){
  e.preventDefault();
  const selectedView = this.props.itemText;
  this.props.passSelectedViewToMenu(selectedView);
}

export function passSelectedViewToSidebar(selectedView){
  this.props.getSelectedView(selectedView);
}

export function passSelectedViewToApp(selectedView){
  this.props.getNewActiveView(selectedView);
}

export function setNewActiveView(selectedView){
  console.log('setNewActiveView called');
  console.log('The selectedView is: ' + selectedView);
  this.setState({
    activeView: selectedView,
  });
  getActiveViewState(this);
}

function getActiveViewState(object){
  console.log('App new view state: ' + object.state.activeView);
}
