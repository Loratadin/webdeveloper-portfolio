import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
   ImageButton,
   ProjectBio,
   ProjectWrapper,
   Number,
   GitLink
} from '../containers/Projects/Projects.style';
import { Relative } from '../theme/grid';
import { Link } from '../theme/types';

class Coffeeshop extends Component {
 render () {
  return (
    <ProjectWrapper>
      <Zoomy
        imageUrl={require('../assets/proj-coffeeshop.jpg')}
        renderThumbnail={({ showImage }) => 
          <ImageButton onClick={showImage}>
            <img
              src={require('../assets/proj-s-coffeeshop.jpg')} 
              alt={'coffeeshop concept'} 
            />
          </ImageButton>
        }
        scale={[1.1, 1.1]}
        imageProps={{
          style: {
          width: '100vw',
          height: 'auto'
          }
        }}
      />
      <ProjectBio>
        <Relative>
          <Number>
            <h3>03</h3>
          </Number>
        </Relative>
        <h2><Link href="http://projects.loratadin.com.s3-website-us-east-1.amazonaws.com/coffeeshop/" target="_blank">Coffeeshop</Link> Concept</h2>
        <p>
        Delivered high-quality homepage for a coffee shop concept. Created delightful design with parallax effect in CSS, fully responsive for any device. Implemented a full screen slider, and an animated skewed section with Vanilla JavaScript. Extended default JavaScript functionality by using jQuery for a hamburger menu.
        <GitLink 
          href="https://github.com/Loratadin/coffeeshop" 
          target="_blank"><img src={require('../assets/github-dark.png')} 
          alt={'GitHub'}/>
        </GitLink>
        </p>
      </ProjectBio>
    </ProjectWrapper>
  );
 }
}

export default Coffeeshop;