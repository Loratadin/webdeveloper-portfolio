import styled from 'styled-components';
import media from '../../theme/media';
import { Relative } from '../../theme/grid';

export const VideoContainer = styled(Relative)`
  width: 90%;
  padding: 0 5px;
  box-sizing: border-box;
  margin: 0 auto;
  cursor: pointer;
  ${media.tablet`
  width: 400px;
  margin: 10px auto;
   `}
  ${media.desktop`
  width: 500px;
  margin: 15px auto;
   `}
`;


