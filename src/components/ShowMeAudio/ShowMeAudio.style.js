import styled from 'styled-components';
import media from '../../theme/media';
import  ReactAudioPlayer  from 'react-audio-player';
import { lemon, lime, navy } from '../../theme/variables';

export const MP3Player = styled(ReactAudioPlayer)`
`;

export const MP3PlayerWrapper = styled.div`
 width: 40%;
 height: auto;
 padding: 10px;
 margin: 10px auto;
 border-radius: 10px;
 background-color: ${navy};
 color: ${lime};
 font-size: 14px;
 display: flex;
 align-items: center;
 justify-content: center;
 & > img {
  margin-right: 5%;
 }
`;

export const ColumnContainer = styled.div`
 display: flex;
 flex-direction: column;
`;