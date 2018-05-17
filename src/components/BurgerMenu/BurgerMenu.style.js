import styled from 'styled-components';
import { navy, lime, green, lemon } from '../../theme/variables';


export const Burger = styled.button`
position: fixed;
top: 60px;
right: 30px;
width: 60px;
height: 60px;
z-index: 2;
display: block;
cursor: pointer;
border: 1px solid ${navy};
outline: inherit;
&:after {
 position: absolute;
 content: '';
 top: 100%;
 bottom: 0;
 left: 0;
 right: 0;
 z-index: 1;
 background: linear-gradient(180deg, ${lime}, ${green}, ${lemon}, ${green});
 transition: all .6s cubic-bezier(0.23, 0.52, 0.48, 0.76);
}
&:hover:after {
 top: 0;
}
`;

export const BurgerLineWrap = styled.div`
left: 21px;
width: 18px;
position: absolute;
height: 1px;
overflow: hidden;
display: block;
background-color: ${navy};
z-index: 2;
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
z-index: 2;
`;