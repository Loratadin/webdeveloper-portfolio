import React, { Component } from 'react';
import { H2 }  from '../../theme/types';
import { VideoContainer } from '../../containers/AboutMe/AboutMe.style';
import ReactPlayer from 'react-player';

class VideoInspire extends Component {
 render() {
  return (
   <div>
    <H2 align="left">I wrote the questions you might want to ask me. Let's start!</H2>
    <H2 align="left">Tell me something to inspire me today</H2>
      <div>
          <H2 align="center">Ok! All you need to know is that everything is possible. We live in a wonderful world that is full of beauty, charm, and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.
          </H2>
          <button/>
          <VideoContainer>       
                 <ReactPlayer 
                 controls
                 width="100%"
                 height="auto"
                 url={require('../../assets/video.mp4')}/>
         </VideoContainer>
         </div>
    </div>
  );
 }
}

export default VideoInspire;