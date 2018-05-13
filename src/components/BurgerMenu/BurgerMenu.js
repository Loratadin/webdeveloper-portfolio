import React, { Component } from 'react';
import { BurgerLineWrap, BurgerCloseWrap} from './BurgerMenu.style';
 import './BurgerMenu.css';


const Line0Style = {
  top: '26px'
};
const Line1Style = {
 top: '30px'
};
const Line2Style = {
 top: '34px'
};
const Close0Style = {
 transform: 'rotate(45deg)'
}
const Close1Style = {
 transform: 'rotate(-45deg)'
}

class BurgerMenu extends Component {
 render() {
  return (
    <div className="burger-menu">
    <BurgerLineWrap style={Line0Style}></BurgerLineWrap>
    <BurgerLineWrap style={Line1Style}></BurgerLineWrap>
    <BurgerLineWrap style={Line2Style}></BurgerLineWrap>
    <BurgerCloseWrap style={Close0Style}></BurgerCloseWrap>
    <BurgerCloseWrap style={Close1Style}></BurgerCloseWrap>
    </div>  
  );
 }
}

export default BurgerMenu;