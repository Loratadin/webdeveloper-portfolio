import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

class NavigationBar extends Component {
 constructor(props) {
  super(props);
  
  this.state= {
      showMe: false
  };
}

operation() {
  this.setState({
    showMe: !this.state.showMe
  })
}
 render() {
  return (
   <div>
     <BurgerMenu onClick={() => this.operation()}/>
       { this.state.showMe ? 
         <NavigationContainer>
         <NavItem href="/">Home</NavItem>
         <NavItem href="/projects">Projects</NavItem>
         <NavItem href="/about-me">About me</NavItem>
         </NavigationContainer>
         : null}
   </div>
  );
 }
}

export default NavigationBar;