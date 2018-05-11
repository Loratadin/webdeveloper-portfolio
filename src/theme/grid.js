import styled from 'styled-components';
import media from './media';

export const Container = styled.div`
   padding: 15px 10px;
   h1 {
     font-size: 25px;
   }
   ${media.tablet`
   h1 {
    font-size: 35px;
   }
   `}
   ${media.desktop`
   h1 {
    font-size: 45px;
   }
   `}
   ${media.monitor`
   padding: 30px 120px;
   h1 {
    font-size: 55px;
   }
   `}
`;

export const Relative = styled.div`
  position: relative;
`;