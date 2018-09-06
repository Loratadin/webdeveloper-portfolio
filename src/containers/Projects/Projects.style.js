import styled from 'styled-components';
import { lemon, navy, green } from '../../theme/variables';
import media from '../../theme/media';


export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  width: 85vw;
  box-shadow: 0 25px 30px 0 rgba(0,0,0,.2);
  ${media.monitor`
     width: 35vw;
     box-shadow: 0 50px 60px 0 rgba(0,0,0,.2);
   `}

  & > img {
   transition: transform .3s;
   width: 100%;
   display: block;
  }
  

  &:hover {
   & > img {
    transform: scale(1.3);
   }
  }
`;

export const ProjectBio = styled.div`
font-size: 10px;
text-align: center;
padding: 0 4%;
line-height: 2.5;
${media.tablet`
font-size: 12px;
`}
${media.monitor`
font-size: 14px;
padding: 0 150px;
`}
`;

export const ProjectWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 25px 0;
${media.desktop`
margin: 50px 0;
`}
${media.monitor`
margin: 150px 0;
flex-wrap: nowrap;
justify-content: space-evenly;
`}
`;

export const Number = styled.div`
  position: absolute;
  left: -10px;
  top: -25px;
  z-index: -1;
  ${media.tablet`
  left: -25px;
  top: -55px;
  `}
  ${media.monitor`
  left: -50px;
  top: -110px;
  `}

  h3 {
    font-size: 30px;
    margin: 0;
    color: ${lemon};
    opacity: 0.7;
    ${media.tablet`
      font-size: 60px;
   `}
    ${media.monitor`
      font-size: 120px;
   `}
  }
`;

export const GitLink = styled.a`
position: relative;
display: inline-block;
width: 35px;
height: 35px;
margin-left: 5px;
&:after {
  position: absolute;
  content: '';
  top: -5%;
  bottom: -5%;
  left: -5%;
  right: -5%;
  border-bottom: 2px solid ${navy};
  transition: height .1s, background-color .1s;
  z-index: -1;
}
&:hover:after {
  border-bottom: 15px solid ${green};
}
& > img {
  width: 100%;
}
`;

export const Zoomy = styled.a`
box-sizing: border-box;
margin: 0px;
padding: 0px;
cursor: pointer;
display: inline-block;
width: 85vw;
height: auto;
box-shadow: rgba(0, 0, 0, 0.2) 0px 25px 30px 0px;
overflow: hidden;
${media.desktop`
  width: 35%;
`}
&:hover {
  transform: scale(1.1);
}
& > img {
  width: 100%;
  display: block;
  transition: all 0.3s ease 0s;
}
`;