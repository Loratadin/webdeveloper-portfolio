import React, { Component } from 'react';
import { HeroImage, Socials, HomeWrapper, SocialsWrapper, SocialImg, SocialLink } from './Home.style';

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
       <SocialsWrapper>
        <Socials>
          <SocialLink href="https://github.com/Loratadin" target="_blank" rel="noopener noreferrer" >
            <SocialImg src={require('../../assets/github.png')} alt={'github'}/>
          </SocialLink>
        </Socials>
        <Socials>
          <a href="mailto:taniashulha@gmail.com">
            <SocialImg src={require('../../assets/email.png')} alt={'email'}/>
          </a> 
        </Socials>
        <Socials>
          <a href="https://www.linkedin.com/in/tatsiana-shulha-450413b8/" target="_blank" rel="noopener noreferrer" >
            <SocialImg src={require('../../assets/linkedin.png')} alt={'linkedin'}/>
          </a>
        </Socials>
        </SocialsWrapper>
        <HeroImage>
          <h1> &lt; ... &gt; </h1>
          <h2>Front-end Developer</h2>
        </HeroImage>
      </HomeWrapper>
    );
  }
}