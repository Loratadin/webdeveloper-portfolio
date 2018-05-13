import styled from 'styled-components';
import { lemon, navy, lime, green, black } from '../../theme/variables';

export const BurgerMain = styled.div`
position: fixed;
`;

export const Burger = styled.div`
 position: fixed;
 top: 60px;
 right: 30px;
 width: 60px;
 height: 60px;
 z-index: 1;
 display: block;
 cursor: pointer;
 border: 1px solid ${lime};
 &:hover {BurgerHover} {
 transform: translate3d(0,105%,0);
 }
`;
export const BurgerHover = styled.div`
top: 120px;
right: 30px;
width: 60px;
height: 60px;
display: block;
z-index: 1;
background: linear-gradient(180deg,${lemon},${navy},${lime},${green});
transition: transform .8s cubic-bezier(.165,.84,.44,1);
`;

export const BurgerLineWrap = styled.div`
left: 21px;
width: 18px;
position: absolute;
height: 1px;
overflow: hidden;
display: block;
background-color: ${navy};
`;

export const BurgerCloseWrap = styled.div`
top: 23px;
left: 30px;
position: absolute;
width: 1px;
height: 15px;
overflow: hidden;
display: block;
background-color: ${navy};
visibility: hidden;
`;


export const BurgerBorderWrap = styled.div``;
export const BurgerMask = styled.div``;