import React, { Component } from 'react';

class BurgerMenu extends Component {
 render() {
  return (
    <div id="burger">
    <div id="burger-hover"></div>
    <div class="burger-line-wrap-0 burger-line-wrap"></div>
    <div class="burger-line-wrap-1 burger-line-wrap"></div>
    <div class="burger-line-wrap-2 burger-line-wrap"></div>
    <div class="burger-close-wrap-0 burger-close-wrap"></div>
    <div class="burger-close-wrap-1 burger-close-wrap"></div>
    <div class="burger-border-wrap"></div>
    <div class="burger-mask"></div>
    </div>
  );
 }
}

export default BurgerMenu;