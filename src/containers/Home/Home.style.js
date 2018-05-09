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

export const RevealP = styled.p`
position: relative;
&:after {
 content: ' ':
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: #e2f96b;

 transform-origin: left:
 transform: rotateY(90deg);

 transition: transform 3s;
}

${({ hide }) => hide &&`
  &:after {
  transition: transformY(0deg);
}
`}
`;