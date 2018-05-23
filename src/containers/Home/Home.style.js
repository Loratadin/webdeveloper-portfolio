import styled from 'styled-components';
import { green } from '../../theme/variables';

export const HeroImage = styled.div`
position: relative;
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
   &:after {
     position: absolute;
     content: '';
     top: -120px;
     left: -120px;
     right: -120px;
     bottom: -120px;
     border: 1px solid ${green};
     z-index: -1;
   }
   h1 {
    margin-top: 23%;
   }
`;

export const Socials = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 15px;
`;

export const HomeWrapper = styled.div`
position: relative;
width: 100%;
height: 100%;
overflow: hidden;
`;
  
export const SocialsWrapper = styled.div`
position: absolute;
top: 50%;
left: 5%;
width: 3%;
height: auto;
display: flex;
flex-wrap: wrap;
background-color: #fff;
padding: 10px 0;
`;
  
export const SocialImg = styled.img`
width: 100%;
display: block;
`;