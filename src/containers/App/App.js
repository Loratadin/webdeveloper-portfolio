import React, { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ReallySmoothScroll from 'really-smooth-scroll';

ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
