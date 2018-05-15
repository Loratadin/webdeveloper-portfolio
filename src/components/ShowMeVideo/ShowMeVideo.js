import React, { Component } from 'react';
import { LimeButton } from './ShowMeVideo.style';
import { H2 }  from '../../theme/types';
import { VideoContainer, StyledPlayButton } from '../../containers/AboutMe/AboutMe.style';
import ReactPlayer from 'react-player';

class ShowMeVideo extends Component {
 constructor(props) {
  super(props);

  this.state= {
      showMe: false
  };
}

operation() {
  this.setState({
    showMe: !this.state.showMe
  })
}
 render() {
  return (
   <div>
   <LimeButton onClick={() => this.operation()}><img src={require('../../assets/lime.png')} alt={'lime'}/></LimeButton>
      { this.state.showMe ? 
      <div>
          <H2 align="center">Ok! All you need to know is that everything is possible. We live in a wonderful world that is full of beauty, charm, and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.
          </H2>
          <VideoContainer>
          <StyledPlayButton/>
            <ReactPlayer 
            width="100%"
            height="auto"
            url={require('../../assets/video.mp4')}/>
         </VideoContainer>
         </div>
    : null}
    </div>
  );
 }
}

export default ShowMeVideo;