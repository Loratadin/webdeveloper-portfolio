import styled from 'styled-components';
import { lemon } from '../../theme/variables';
import media from '../../theme/media';


export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  width: 85vw;
  ${media.monitor`
     width: 35vw;
   `}

  & > img {
   transition: transform .3s;
   width: 100%;
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
margin: 25px 0;
${media.desktop`
margin: 50px 0;
`}
${media.monitor`
margin: 150px 0;
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