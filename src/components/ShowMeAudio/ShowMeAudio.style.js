import styled from 'styled-components';
import media from '../../theme/media';
import  ReactAudioPlayer  from 'react-audio-player';
import { lemon } from '../../theme/variables';

export const MP3Player = styled(ReactAudioPlayer)`
margin-left: 15px;
`;

export const MP3PlayerWrapper = styled.div`
 width: 50%;
 height: auto;
 padding: 10px;
 margin: 10px auto;
 border-radius: 10px;
 background-color: ${lemon};
 font-size: 14px;
 display: flex;
 align-items: center;
 justify-content: center;
`;