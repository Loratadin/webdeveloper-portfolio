import React, { Component } from 'react';
import { NavigationContainer, NavItem, NavLink } from './Navigation.style';

const buttonStyle = {
  position: 'fixed',
  top: '60px',
  right: '30px',
  width: '60px',
  height: '60px',
  zIndex: '4',
  display: 'block',
  cursor: 'pointer',
  border: '1px solid #9BE564',
  outline: 'inherit',
  background: 'linear-gradient(180deg, #e2f96b, #9BE564, #fff266, #9BE564)'
}
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
     <button style={buttonStyle} onClick={this.showNav}/>
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