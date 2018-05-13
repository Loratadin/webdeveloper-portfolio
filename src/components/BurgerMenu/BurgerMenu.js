import React, { Component } from 'react';
import { 
 BurgerMain,
 Burger, 
 BurgerHover, 
 BurgerLineWrap,
 BurgerCloseWrap, 
 BurgerBorderWrap, 
 BurgerMask } from './BurgerMenu.style';


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
const DivStyle = {
 position: 'fixed'
}
class BurgerMenu extends Component {


 render() {
  return (
   <BurgerMain>
    <Burger>
    <BurgerLineWrap style={Line0Style}></BurgerLineWrap>
    <BurgerLineWrap style={Line1Style}></BurgerLineWrap>
    <BurgerLineWrap style={Line2Style}></BurgerLineWrap>
    <BurgerCloseWrap style={Close0Style}></BurgerCloseWrap>
    <BurgerCloseWrap style={Close1Style}></BurgerCloseWrap>
    <BurgerBorderWrap></BurgerBorderWrap>
    <BurgerMask></BurgerMask>
    </Burger>
    <BurgerHover></BurgerHover>
    </BurgerMain>
  );
 }
}

export default BurgerMenu;