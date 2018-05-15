import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { Background } from '../App/App.style';
import ReactPlayer from 'react-player';
import {H2} from '../../theme/types';
import { VideoContainer } from './AboutMe.style';

class AboutMe extends Component {
 render(){
  return (
   <Container>
   <Background><img src={require('../../assets/doggy.png')} alt={'Doggy'}/></Background>
      <h1>About me</h1>
      <H2 align="right">Tell me something to inspire me today</H2>
      <H2 align="center">Ok! All you need to know is that everything is possible. We live in a wonderful world that is full of beauty, charm, and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.
      </H2>
      <VideoContainer>
        <ReactPlayer 
         width="100%"
         controls
         url={require('../../assets/video.mp4')}/>
      </VideoContainer>
    </Container>
  );
 }
}

export default AboutMe;