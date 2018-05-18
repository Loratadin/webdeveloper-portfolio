import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import ReallySmoothScroll from 'really-smooth-scroll';

ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
