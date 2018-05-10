import styled from 'styled-components';

export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;

  & > img {
   transition: transform .3s;
  }
  

  &:hover {
   & > img {
    transform: scale(1.3);
   }
  }
`;

export const ProjectBio = styled.div`
font-size: 14px;
text-align: center;
padding: 0 150px;
line-height: 2.5;
`;

export const ProjectWrapper = styled.div`
display: flex;
justify-content: space-evenly;
margin: 150px 0;
`;

export const Number = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`;