import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.state = {

    }
  }

  // Like saying you were just born.
  // The component did just mount to the screen
  // Will only run once while component is shown on the screen
  // Usually used on API calls to get data
  componentDidMount() {
    // Example: 
    // GET the data I need to correctly display
  }

  // Like when someone gives you a gift
  // This component could be received props from a parent component, and every time it receives the props, this method will run
  // Runs every time props are given
  // THIS IS ACTUALLY DEPRECATED
  componentWillReceiveProps(nextProps) {
    // if (nextProps.whatever !== this.props.whatever){
    //   Do something here
    // }
  }

  // Making a decision to re-render
  // Optimizes: allows the component to determine the updates
  shouldComponentUpdate(nextProps, nextState) {
    // Return true if want it to update
    // Return false if do not want it to update
  }

  // Clean up / Tear down your code before your component disappears
  componentWillUnmount() {
    // Example:
    // Remove event listener
  }


  // New lifecycle methods

  // getDerivedStateFromProps(props, state) {
  //   // return the new, updated state based upon the props
  // }

  // // Allows you to create a back up of the current way things are
  // getSnapshotBeforeUpdate() {

  // }

  render() {
    return (
      <>
        Code goes here
      </>
    )
  }
}
export default App;
