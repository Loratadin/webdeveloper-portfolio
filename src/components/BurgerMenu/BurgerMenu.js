import React, { Component } from 'react';
import { 
 Burger, 
 BurgerHover, 
 BurgerLineWrap, 
 BurgerCloseWrap, 
 BurgerBorderWrap, 
 BurgerMask } from './BurgerMenu.style';

class BurgerMenu extends Component {
 render() {
  return (
    <Burger>
    <BurgerHover></BurgerHover>
    <BurgerLineWrap class="burger-line-wrap-0"></BurgerLineWrap>
    <BurgerLineWrap class="burger-line-wrap-1"></BurgerLineWrap>
    <BurgerLineWrap class="burger-line-wrap-2"></BurgerLineWrap>
    <BurgerCloseWrap class="burger-close-wrap-0"></BurgerCloseWrap>
    <BurgerCloseWrap class="burger-close-wrap-1"></BurgerCloseWrap>
    <BurgerCloseWrap class="burger-border-wrap"></BurgerCloseWrap>
    <BurgerMask></BurgerMask>
    </Burger>
  );
 }
}

export default BurgerMenu;