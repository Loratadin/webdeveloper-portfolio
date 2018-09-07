import React, { Component } from 'react';
import {
   ProjectBio,
   ProjectWrapper,
   Number,
   Zoomy
} from '../containers/Projects/Projects.style';
import { Relative } from '../theme/grid';
import { Link } from '../theme/types';

class TeamLogicIT extends Component {
 render () {
  return (
    <ProjectWrapper>
      <Zoomy href="https://teamlogicitplanotx.com/" target="_blank">
            <img
              src={require('../assets/proj-s-teamlogic.jpg')} 
              alt={'teamlogic IT company'} 
            />
      </Zoomy>
      <ProjectBio>
        <Relative>
          <Number>
            <h3>01</h3>
          </Number>
        </Relative>
        <h2>IT Services Business <Link href="https://teamlogicitplanotx.com/" target="_blank">Website</Link></h2>
        <p>
         Implemented a business website for an IT Services Company in Plano Texas. Designed the layout for Homepage and Blog. Created a custom theme using PHP, SASS, and JavaScript.
        </p>
      </ProjectBio>
    </ProjectWrapper>
  );
 }
}

export default TeamLogicIT;
