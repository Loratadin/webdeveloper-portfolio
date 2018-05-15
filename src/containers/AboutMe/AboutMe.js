import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { Background } from '../App/App.style';
import ShowMeVideo from '../../components/ShowMeVideo/ShowMeVideo';
import { H2 }  from '../../theme/types';

class AboutMe extends Component {
 render(){
  return (
   <Container>
   <Background><img src={require('../../assets/doggy.png')} alt={'Doggy'}/></Background>
      <h1>About me</h1>
      <H2 align="left">I wrote the questions you might want to ask me. Let's start! Hit the lime to get the answers.</H2>
      <H2 align="left">Tell me something to inspire me today</H2>
      <ShowMeVideo/>
    </Container>
  );
 }
}

export default AboutMe;