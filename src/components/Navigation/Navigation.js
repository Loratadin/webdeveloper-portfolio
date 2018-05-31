import React, { Component } from 'react';
import { BurgerButton, NavigationContainer, NavItem, NavLink } from './Navigation.style';
import { Route, Link } from 'react-router-dom';
import './Navigation.css';

const DecorationNone = {
 textDecoration: 'none'
}

class Navigation extends Component {
 constructor(props) {
  super(props);
  
  this.menuWrapperClasses = ['menu-wrapper'];
  this.state = { show: false };
  this.showNav = this.showNav.bind(this)
}

showNav = () => {
  this.toggleMenuWrapper();
  const {show} = this.state;
  this.setState( { show: !show } )
}

toggleMenuWrapper = () => {
  if (this.menuWrapperClasses.length === 1) {
    this.menuWrapperClasses.push('menu-wrapper--opened');
  } else {
    this.menuWrapperClasses.pop();
  }
}

 render() {
  return (
   <div>
     <BurgerButton onClick={this.showNav}/>
     <div className={this.menuWrapperClasses.join(' ')}>
       { this.state.show && 
         <NavigationContainer>
         <NavItem>
           <Link onClick={this.showNav} style={DecorationNone} to="/"><NavLink>.home</NavLink></Link>
         </NavItem>
         <NavItem>
         <Link onClick={this.showNav} style={DecorationNone} to="/projects"><NavLink>.projects</NavLink></Link>
         </NavItem>
         <NavItem>
         <Link onClick={this.showNav} style={DecorationNone} to="/about-me"><NavLink>.about_me</NavLink></Link>
         </NavItem>
         <NavItem>
         <Link onClick={this.showNav} style={DecorationNone} to="https://docs.google.com/document/d/1Im1UV7LK98O4cpUTMYA-TIJIrWgh1h5pboJudGXxKJI/edit?usp=sharing" target="_blank">
         <NavLink>.resume</NavLink></Link>
         </NavItem>
         </NavigationContainer>
       }
     </div>
   </div>
  );
 }
}

export default Navigation;