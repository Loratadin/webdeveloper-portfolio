import React, { Component } from 'react';
import { HeroImage, Socials } from './Home.style';

const homeWrapper = {
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden'
}
export default class Home extends Component {

  render() {
    return (
      <div style={homeWrapper}>
        <Socials><img src={require('../../assets/github.png')} alt={'Us'}/></Socials>
        <Socials><img src={require('../../assets/email.png')} alt={'email'}/></Socials>
        <HeroImage>
          <h1> &lt; ... &gt; </h1>
          <h2>Front-end Developer</h2>
        </HeroImage>
      </div>
    );
  }
}