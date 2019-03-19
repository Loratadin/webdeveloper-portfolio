import React, { Component } from 'react';
import { HeroImage, Socials, HomeWrapper, SocialsWrapper, SocialImg, SocialLink } from './Home.style';

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <SocialsWrapper>
          <Socials>
            <SocialLink href="https://github.com/Loratadin" target="_blank" rel="noopener noreferrer" >
              <SocialImg src={require('../../assets/github.png')} alt={'github'} />
            </SocialLink>
          </Socials>
          <Socials>
            <SocialLink href="mailto:taniashulha@gmail.com">
              <SocialImg src={require('../../assets/email.png')} alt={'email'} />
            </SocialLink>
          </Socials>
          <Socials>
            <SocialLink href="https://www.linkedin.com/in/tatsiana-shulha-450413b8/" target="_blank" rel="noopener noreferrer" >
              <SocialImg src={require('../../assets/linkedin.png')} alt={'linkedin'} />
            </SocialLink>
          </Socials>
        </SocialsWrapper>
        <HeroImage>
          <h1> &lt; TaniaShulga / &gt; </h1>
          <h2>Front-end Developer</h2>
        </HeroImage>
      </HomeWrapper>
    );
  }
}