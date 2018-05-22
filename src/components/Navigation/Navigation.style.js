import styled from 'styled-components';
import media from '../../theme/media';
import { green } from '../../theme/variables';

export const NavigationContainer = styled.div`
position: relative;
width: 100vw;
height: 100vh;
background-color: ${green};
z-index: 3;
${media.desktop`
  width: 40vw;
`}
`;

export const NavItem = styled.div`
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

export const NavLink = styled.a`
position: relative;
left: 10%;
width: 100px;
text-decoration: none;
display: inline;
color: #d9d9d9;
animation: slide-back 0.5s forwards ease-in-out;
@keyframes slide-back {
  from {left: 13%;}
  to {left: 10%;}
}
&:hover {
  color: #fff;
  animation: slide 0.5s forwards ease-in-out;
 }
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
  border-right: 5px solid #fff;
  animation: blinker 0.5s ease-in-out infinite;
  }
@keyframes blinker {
    from {border-right: 5px solid #fff}
    to {border-right: 5px solid ${green};}
  }
}
`;

export const Cursor = styled.p`
display: inline-block;
`;
