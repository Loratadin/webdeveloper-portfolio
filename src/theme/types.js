import styled from 'styled-components';
import { navy, lemon } from './variables';

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
  }
`;

