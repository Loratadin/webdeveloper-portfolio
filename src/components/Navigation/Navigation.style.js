import styled from 'styled-components';
import media from '../../theme/media';
import { green, navy } from '../../theme/variables';

export const NavigationContainer = styled.div`
width: 100vw;
height: 100vh;
background-color: ${green};
overflow: hidden;
${media.desktop`
  width: 40vw;
`}
`;

export const NavItem = styled.a`
text-decoration: none;
position: relative;
display: block;
cursor: pointer;
color: #fff;
font-size: 40px;
&:hover {
 color: ${navy};
}
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
