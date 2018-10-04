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
   & > h1 {
    margin-top: 23%;
    font-size: 20px;
   }
   ${media.desktop`
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
    & > h1 {
      font-size: 35px;
     }
   `}
   ${media.monitor`
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
   `}
`;

export const Socials = styled.div`
position: relative;
width: 100%;
height: auto;
margin-bottom: 5px;  
transform: translate(-50%, -50%);
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
background-color: #fff;
`;

export const HomeWrapper = styled.div`
position: relative;
width: 100%;
height: 100%;
`;
  
export const SocialsWrapper = styled.div`
position: absolute;
display: flex;
flex-wrap: wrap;
top: 120%;
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
 left: 6.4%;
 width: 3%;
 height: auto;
 padding: 10px 0;
 background-color: #fff;
 `}
 ${media.monitor`
 top: 50%;
 left: 6.4%;
 width: 3%;
 height: auto;
 padding: 10px 0;
 background-color: #fff;
 `}
`;
  
export const SocialImg = styled.img`
width: 100%;
display: block;
`;