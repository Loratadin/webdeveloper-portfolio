import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import ReallySmoothScroll from 'really-smooth-scroll';

ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <Navigation>
        {this.props.children}
      </Navigation>
    );
  }
}

export default App;
