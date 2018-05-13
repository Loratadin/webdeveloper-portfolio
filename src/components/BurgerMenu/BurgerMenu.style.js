import styled from 'styled-components';
import { navy } from '../../theme/variables';


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