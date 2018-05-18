import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { HeroImage } from './Home.style';

export default class Home extends Component {
  //static propTypes = {};

  render() {
    return (
      <Container>
        <HeroImage>
          <h1> &lt; ... &gt; </h1>
          <h2>Front-end Developer</h2>
        </HeroImage>
      </Container>
    );
  }
}