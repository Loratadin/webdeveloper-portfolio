import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
display: flex;
position: fixed;
right: 0;
display: none;
`;

export const NavItem = styled.a`
text-decoration: none;
position: relative;
margin-right: 30px;
cursor: pointer;
`;
