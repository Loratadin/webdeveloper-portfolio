import styled from 'styled-components';
import { green } from '../../theme/variables';
import media from '../../theme/media';

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
margin-bottom: 5px;  
 ${media.tablet`
 margin-bottom: 10px;
 `}
 ${media.desktop`
 margin-bottom: 12px;
 `}
 ${media.monitor`
 margin-bottom: 15px; 
 `}
`;

export const SocialLink = styled.a`
position: relative;
display: block;
width: 100%;
height: auto;
`;

export const HomeWrapper = styled.div`
position: relative;
width: 100%;
height: 100%;
overflow: hidden;
`;
  
export const SocialsWrapper = styled.div`
position: absolute;
display: flex;
flex-wrap: wrap;
top: 100%;
left: 50%;
width: 30%;
height: auto;
${media.tablet`
top: 100%;
left: 50%;
width: 30%;
height: auto;
 `}
 ${media.desktop`
 top: 50%;
 left: 5%;
 width: 3%;
 height: auto;
 background-color: #fff;
 padding: 10px 0;
 `}
 ${media.monitor`
 top: 50%;
 left: 5%;
 width: 3%;
 height: auto;
 background-color: #fff;
 padding: 10px 0;
 `}
`;
  
export const SocialImg = styled.img`
width: 100%;
display: block;
`;