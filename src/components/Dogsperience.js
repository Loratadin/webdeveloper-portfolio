import React, { Component } from 'react';
import {
   ImageButton,
   ProjectBio,
   ProjectWrapper,
   Number,
   GitLink,
   Zoomy
} from '../containers/Projects/Projects.style';
import { Relative } from '../theme/grid';
import { Link } from '../theme/types';

class Dogsperience extends Component {
 render () {
  return (
    <ProjectWrapper>
      <ProjectBio>
        <Relative>
          <Number>
            <h3>04</h3>
          </Number>
        </Relative>
        <h2><Link href="http://projects.loratadin.com.s3-website-us-east-1.amazonaws.com/dogsperience/" target="_blank">Dogsperience</Link> Concept</h2>
        <p>
        Implemented a static homepage for an online pet store concept. Used HTML, CSS and jQuery for the slider.
        <GitLink 
          href="https://github.com/Loratadin/dogsperience" 
          target="_blank"><img src={require('../assets/github-dark.png')} 
          alt={'GitHub'}/>
        </GitLink>
        </p>
      </ProjectBio>
      <Zoomy href="http://projects.loratadin.com.s3-website-us-east-1.amazonaws.com/dogsperience/" target="_blank">
            <img
              src={require('../assets/proj-s-dogsperience.jpg')} 
              alt={'dogsperience concept'} 
            />
      </Zoomy>
    </ProjectWrapper>
  );
 }
}

export default Dogsperience;