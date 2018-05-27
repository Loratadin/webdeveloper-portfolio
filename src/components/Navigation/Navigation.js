import React, { Component } from 'react';
import { BurgerButton, NavigationContainer, NavItem, NavLink } from './Navigation.style';
import { Route, Link } from 'react-router-dom';
//import './Navigation.css';

const DecorationNone = {
 textDecoration: 'none'
}

class Navigation extends Component {
 constructor(props) {
  super(props);
  
  //const clicked = [];
   //if(this.state.onClick){
    // clicked.push('red');
   //}
  
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
           <Link style={DecorationNone} to="/"><NavLink>.home</NavLink></Link>
         </NavItem>
         <NavItem>
         <Link style={DecorationNone} to="/projects"><NavLink>.projects</NavLink></Link>
         </NavItem>
         <NavItem>
         <Link style={DecorationNone} to="/about-me"><NavLink>.about_me</NavLink></Link>
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