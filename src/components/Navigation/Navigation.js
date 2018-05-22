import React, { Component } from 'react';
import { BurgerButton, NavigationContainer, NavItem, NavLink } from './Navigation.style';

class Navigation extends Component {
 constructor(props) {
  super(props);
  
  this.state = { show: false };

  this.showNav = this.showNav.bind(this)
}

showNav = () => {
  const {show} = this.state;
  this.setState( { show: !show } )
}
 render() {
  return (
   <div>
     <BurgerButton onClick={this.showNav}/>
       { this.state.show && 
         <NavigationContainer>
         <NavItem>
           <NavLink href="/">.home</NavLink>
         </NavItem>
         <NavItem>
           <NavLink href="/projects">.projects</NavLink>
         </NavItem>
         <NavItem>
           <NavLink href="/about-me">.about_me</NavLink>
         </NavItem>
         <NavItem>
           <NavLink href="https://docs.google.com/document/d/1Im1UV7LK98O4cpUTMYA-TIJIrWgh1h5pboJudGXxKJI/edit?usp=sharing" target="_blank">.resume</NavLink>
         </NavItem>
         </NavigationContainer>
       }
   </div>
  );
 }
}

export default Navigation;