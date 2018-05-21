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
  padding: '10px 0'
}
const SocialImg = {
  width: '100%',
  display: 'block'
}
export default class Home extends Component {

  render() {
    return (
      <div style={homeWrapper}>
       <div style={socialsWrapper}>
        <Socials>
          <a href="https://github.com/Loratadin" target="_blank" rel="noopener noreferrer" >
            <img style={SocialImg} src={require('../../assets/github.png')} alt={'Us'}/>
          </a>
        </Socials>
        <Socials>
          <a href="mailto:taniashulha@gmail.com">
            <img style={SocialImg} src={require('../../assets/email.png')} alt={'email'}/>
          </a> 
        </Socials>
        <Socials>
          <a href="https://www.linkedin.com/in/tatsiana-shulha-450413b8/" target="_blank" rel="noopener noreferrer" >
            <img style={SocialImg} src={require('../../assets/linkedin.png')} alt={'linkedin'}/>
          </a>
        </Socials>
        </div>
        <HeroImage>
          <h1> &lt; ... &gt; </h1>
          <h2>Front-end Developer</h2>
        </HeroImage>
      </div>
    );
  }
}