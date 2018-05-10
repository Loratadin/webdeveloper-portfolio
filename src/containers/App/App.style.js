import styled from 'styled-components';

export const Background = styled.div`
 position: fixed;
 left: 15vw;
 width: 75vw;
 top: 5vh;
 height: 80vh;
 background-image: url(${require('../../assets/us-bg.png')});
 background-color: rgba(238, 251, 159, 0.75);
 background-size: cover;
 background-repeat: no-repeat;
 background-position: center;
 z-index: -99;
`;