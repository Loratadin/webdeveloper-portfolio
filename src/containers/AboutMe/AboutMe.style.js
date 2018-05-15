import styled from 'styled-components';
import media from '../../theme/media';
import { Relative } from '../../theme/grid';

export const VideoContainer = styled(Relative)`
  width: 90%;
  margin: 0 auto;
  ${media.desktop`
  width: 80%;
   `}
  ${media.monitor`
  width: 70%;
   `}
`;
