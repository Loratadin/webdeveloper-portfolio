import styled from 'styled-components';

export const Image = styled.img`
   width: 100%;
`;

export const HeroImage = styled.div`
   height: 100vh;
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
    margin-top: 320px;
   }
`;