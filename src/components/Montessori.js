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
         Implemented a fast performing application which allows creating, editing and deleting tasks. Created reusable components to make the application scalable. Implemented a validation, so that the app shows error messages if a task already exists or a user is trying to save an empty task.
        <GitLink 
          href="https://github.com/Loratadin/montessori" 
          target="_blank"><img src={require('../assets/github-dark.png')} 
          alt={'GitHub'}/>
        </GitLink>
        </p>
      </ProjectBio>
      <Zoomy
        imageUrl={require('../assets/proj-montessori.jpg')}
        renderThumbnail={({ showImage }) => 
          <ImageButton onClick={showImage}>
            <img
              src={require('../assets/proj-s-montessori.jpg')} 
              alt={'montessori school'} 
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
    </ProjectWrapper>
  );
 }
}

export default Montessori;