import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { Background } from '../App/App.style';

class AboutMe extends Component {
 render(){
  return (
   <Container>
   <Background><img src={require('../../assets/doggy.png')} alt={'Doggy'}/></Background>
      <h1>About me</h1>
    </Container>
  );
 }
}

export default AboutMe;