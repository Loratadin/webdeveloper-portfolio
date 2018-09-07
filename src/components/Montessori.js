import React, { Component } from 'react';
import {
   ProjectBio,
   ProjectWrapper,
   Number,
   GitLink, 
   Zoomy
} from '../containers/Projects/Projects.style';
import { Relative } from '../theme/grid';
import { Link } from '../theme/types';

class Montessori extends Component {
 render () {
  return (
    <ProjectWrapper>
      <ProjectBio>
        <Relative>
          <Number>
            <h3>02</h3>
          </Number>
        </Relative>
        <h2><Link href="http://projects.loratadin.com.s3-website-us-east-1.amazonaws.com/montessori/" target="_blank">Montessori School</Link> Concept</h2>
        <p>
        Implemented a homepage with a responsive design. Used Vanila JavaScript to create such features as real time clock, search form, theme color change controls, and sign up form. Created a flex panel photo gallery with delightful animation.
        <GitLink 
          href="https://github.com/Loratadin/montessori" 
          target="_blank"><img src={require('../assets/github-dark.png')} 
          alt={'GitHub'}/>
        </GitLink>
        </p>
      </ProjectBio>
      <Zoomy href="http://projects.loratadin.com.s3-website-us-east-1.amazonaws.com/montessori/" target="_blank">
            <img
              src={require('../assets/proj-s-montessori.jpg')} 
              alt={'montessori school'} 
            />
      </Zoomy>
    </ProjectWrapper>
  );
 }
}

export default Montessori;