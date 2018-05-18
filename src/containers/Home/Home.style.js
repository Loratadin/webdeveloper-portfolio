import styled from 'styled-components';

export const HeroImage = styled.div`
   margin: 15%;
   width: 70%;
   height: 70%;
   background-image: url('${require('../../assets/us.jpg')}');
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
   color: #fff;

   h1 {
    margin-top: 23%;
   }
`;

export const Socials = styled.div`
  position: absolute;
  bottom: 20%;
  left: 5%;
  width: 4%;
  height: 4%;
  margin-bottom: 2%;
  & > img {
   width: 100%;
  }
`;