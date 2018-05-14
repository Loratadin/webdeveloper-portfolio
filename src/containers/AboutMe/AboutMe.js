import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { Background } from '../App/App.style';

class AboutMe extends Component {
 render(){
  return (
   <Container>
   <Background><img src={require('../../assets/doggy.png')} alt={'Doggy'}/></Background>
      <h1>About me</h1>
      <h2>Tell me something to inspire me today</h2>
      <h2>Ok! All you need to know is that everything is possible. We live in a wonderful world that is full of beauty, charm, and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.
      </h2>
    </Container>
  );
 }
}

export default AboutMe;