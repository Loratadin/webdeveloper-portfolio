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
`;

export const ProjectWrapper = styled.div`
display: flex;
`;