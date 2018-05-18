import React, { Component } from 'react';
import { HeroImage, Socials } from './Home.style';

const homeWrapper = {
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden'
}
const socialsWrapper = {
  position: 'absolute',
  top: '50%',
  left: '5%',
  width: '3%',
  height: 'auto',
  display: 'flex',
  flexWrap: 'wrap',
  backgroundColor: '#fff',
  paddingTop: '10px'
}
export default class Home extends Component {

  render() {
    return (
      <div style={homeWrapper}>
       <div style={socialsWrapper}>
        <Socials><img src={require('../../assets/github.png')} alt={'Us'}/></Socials>
        <Socials><img src={require('../../assets/email.png')} alt={'email'}/></Socials>
        <Socials><img src={require('../../assets/linkedin.png')} alt={'linkedin'}/></Socials>
        </div>
        <HeroImage>
          <h1> &lt; ... &gt; </h1>
          <h2>Front-end Developer</h2>
        </HeroImage>
      </div>
    );
  }
}