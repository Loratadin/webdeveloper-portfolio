import styled from 'styled-components';

export const Background = styled.div`
 position: fixed;
 left: 15vw;
 width: 75vw;
 top: 5vh;
 height: 80vh;
 background-color: rgba(226, 249, 107, 0.75);
 background-size: cover;
 background-repeat: no-repeat;
 background-position: center;
 z-index: -99;

 & > img {
  width: 100%;s
 }
`;