import styled from 'styled-components';
import { green, navy } from './variables';

export const Link = styled.a`
  color: ${navy};
  text-decoration: none;
  position: relative;

  &:after {
   content: ' ';
   position: absolute;
   left: 0;
   bottom: -4px;
   width: 100%;
   height: 10%;
   background-color: ${navy};
   z-index: -1;
   transition: height .1s, background-color .1s;
  }
  &:hover:after {
   height: 70%;
   background-color: ${green};
  }
`;

