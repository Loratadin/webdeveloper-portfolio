import styled from 'styled-components';
import { lemon, navy, lime, green } from '../../theme/variables';

export const Burger = styled.div`
 position: fixed;
 top: 30px;
 right: 30px;
 width: 60px;
 height: 60px;
 z-index: 3;
 overflow: hidden;
 display: block;
 cursor: pointer;
 background: linear-gradient(180deg,${lemon},${lime},${green},${navy});
`;
export const BurgerHover = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: block;
&:before {
 position: absolute;
 content: ' ';
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 transform: translate3d(0,105%,0);
 opacity: 1;
 background: linear-gradient(180deg,${lemon},${navy},${lime},${green});
}
`;

export const BurgerLineWrap = styled.div``;
export const BurgerCloseWrap = styled.div``;
export const BurgerBorderWrap = styled.div``;
export const BurgerMask = styled.div``;