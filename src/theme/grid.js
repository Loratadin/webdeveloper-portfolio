import styled from 'styled-components';
import media from './media';

export const Container = styled.div`
   padding: 30px 120px;

   ${media.phone`
   padding: 15px 30px;
   `}
`;

export const Relative = styled.div`
  position: relative;
`;