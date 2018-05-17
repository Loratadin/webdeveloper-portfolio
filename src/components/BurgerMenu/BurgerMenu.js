import React, { Component } from 'react';
import { Burger, BurgerLineWrap, BurgerCloseWrap} from './BurgerMenu.style';


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
    <Burger>
    <BurgerLineWrap style={Line0Style}></BurgerLineWrap>
    <BurgerLineWrap style={Line1Style}></BurgerLineWrap>
    <BurgerLineWrap style={Line2Style}></BurgerLineWrap>
    <BurgerCloseWrap style={Close0Style}></BurgerCloseWrap>
    <BurgerCloseWrap style={Close1Style}></BurgerCloseWrap>
    </Burger>  
  );
 }
}

export default BurgerMenu;