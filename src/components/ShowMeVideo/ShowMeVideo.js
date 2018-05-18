import React, { Component } from 'react';
import { LimeButton } from './ShowMeVideo.style';
import { H2 }  from '../../theme/types';
import { VideoContainer, StyledPlayButton } from '../../containers/AboutMe/AboutMe.style';
import ReactPlayer from 'react-player';

class ShowMeVideo extends Component {
 constructor(props) {
  super(props);

  this.state = { play: false };

  this.playVideo = this.playVideo.bind(this)
}

playVideo = () => {
  console.log('hello');
  const play = this.state;
  this.setState( { play: !play } )
}

 render() {
  return (
   <div>
    <H2 align="left">I wrote the questions you might want to ask me. Let's start!</H2>
    <H2 align="left">Tell me something to inspire me today</H2>
      <div>
          <H2 align="center">Ok! All you need to know is that everything is possible. We live in a wonderful world that is full of beauty, charm, and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.
          </H2>
          <VideoContainer>
          <button onClick={this.playVideo}/>        
                 <ReactPlayer 
                 width="100%"
                 height="auto"
                 url={require('../../assets/video.mp4')}/>
         </VideoContainer>
         </div>
    </div>
  );
 }
}

export default ShowMeVideo;