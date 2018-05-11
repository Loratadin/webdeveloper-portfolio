import React, { Component } from 'react';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ReallySmoothScroll from 'really-smooth-scroll';

ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <div>
        <BurgerMenu/>
        <NavigationBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
