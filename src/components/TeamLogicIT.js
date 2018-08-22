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

class TeamLogicIT extends Component {
 render () {
  return (
    <ProjectWrapper>
      <Zoomy
        imageUrl={require('../assets/proj-teamlogic.jpg')}
        renderThumbnail={({ showImage }) => 
          <ImageButton onClick={showImage}>
            <img
              src={require('../assets/proj-s-teamlogic.jpg')} 
              alt={'TeamLogic IT'} 
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
