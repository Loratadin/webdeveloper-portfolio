import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';

class NavigationBar extends Component {
 render() {
  return (
   <NavigationContainer>
    <NavItem href="/">Home</NavItem>
    <NavItem href="/projects">Projects</NavItem>
    <NavItem href="/about-me">About me</NavItem>
   </NavigationContainer>
  );
 }
}

export default NavigationBar;