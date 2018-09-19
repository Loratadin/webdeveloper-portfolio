import styled from 'styled-components';
import media from '../../theme/media';
import { green } from '../../theme/variables';

export const NavigationContainer = styled.ul`
position: relative;
margin: 0;
padding: 0;
width: 100vw;
height: 100vh;
list-style-type: none;
background-color: ${green};
z-index: 3;
`;

export const NavItem = styled.li`
position: relative;
top: 20%;
cursor: pointer;
font-size: 30px;
box-sizing: border-box;
${media.tablet`
 font-size: 45px;
 `}
 ${media.desktop`
 font-size: 50px;
 `}
 ${media.monitor`
 font-size: 60px;
 `}
`;

export const NavLink = styled.span`
position: relative;
left: 10%;
text-decoration: none;
display: inline;
color: #424242;
animation: slide-back 0.5s forwards ease-in-out;
@keyframes slide-back {
  from {left: 13%;}
  to {left: 10%;}
}
&:hover {
  color: #fff;
  animation: slide 0.5s forwards ease-in-out;
 @keyframes slide {
   from {left: 10%;}
   to {left: 13%;}
}
&:hover:after {
  position: absolute;
  content: '';
  top: 4%;
  bottom: 4%;
  right: -5%;
  left: 0;
  border-right: 2px solid #fff;
  animation: blinker 0.5s ease-in-out infinite;
  @keyframes blinker {
    from {border-right: 2px solid #fff}
    to {border-right: 2px solid ${green};}
  }
  ${media.tablet`
  &:hover:after {
    border-right: 3px solid #fff;
     @keyframes blinker {
       from {border-right: 3px solid #fff}
       to {border-right: 3px solid ${green};}
   }}
   `}
 ${media.desktop`
 &:hover:after {
  border-right: 5px solid #fff;
   @keyframes blinker {
     from {border-right: 5px solid #fff}
     to {border-right: 5px solid ${green};}
 }}
 `}
 ${media.monitor`
 &:hover:after {
  border-right: 5px solid #fff;
   @keyframes blinker {
     from {border-right: 5px solid #fff}
     to {border-right: 5px solid ${green};}
 }}
 `}
}}
`;
