import React, { Component } from 'react';
import { H2 }  from '../../theme/types';
import { VideoContainer } from '../../containers/AboutMe/AboutMe.style';
import ReactPlayer from 'react-player';

class VideoTalk extends Component {
 render() {
  return (
   <div>
    <H2 align="left">Seriously. Why did you decide to code?</H2>
          <VideoContainer>       
                 <ReactPlayer 
                 controls
                 width="100%"
                 height="auto"
                 url={require('../../assets/video.mp4')}/>
         </VideoContainer>
         </div>
  );
 }
}

export default VideoTalk;