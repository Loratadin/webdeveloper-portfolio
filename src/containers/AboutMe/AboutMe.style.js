import styled from 'styled-components';
import media from '../../theme/media';
import { Relative } from '../../theme/grid';
import PlayButton from '../../components/PlayButton/PlayButton';

export const VideoContainer = styled(Relative)`
  width: 90%;
  margin: 0 auto;
  cursor: pointer;
  ${media.desktop`
  width: 80%;
   `}
  ${media.monitor`
  width: 70%;
   `}
`;

export const StyledPlayButton = styled(PlayButton)`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;
