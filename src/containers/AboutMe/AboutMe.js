import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { Background } from '../App/App.style';
import ShowMeVideo from '../../components/ShowMeVideo/ShowMeVideo';
import ShowMeAudio from '../../components/ShowMeAudio/ShowMeAudio';

class AboutMe extends Component {
 render(){
  return (
   <Container>
   <Background><img src={require('../../assets/doggy.png')} alt={'Doggy'}/></Background>
      <h1>About me</h1>
      <ShowMeVideo/>
      <ShowMeAudio/>
    </Container>
  );
 }
}

export default AboutMe;