import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { Background } from '../App/App.style';
import VideoInspire from '../../components/VideoInspire/VideoInspire';
import AudioMusic from '../../components/AudioMusic/AudioMusic';

class AboutMe extends Component {
 render(){
  return (
   <Container>
   <Background><img src={require('../../assets/doggy.png')} alt={'Doggy'}/></Background>
      <h1>About me</h1>
      <VideoInspire/>
      <AudioMusic/>
    </Container>
  );
 }
}

export default AboutMe;