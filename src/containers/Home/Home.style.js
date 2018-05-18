import styled from 'styled-components';

export const HeroImage = styled.div`
   margin-top: 5vh;
   height: 80vh;
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