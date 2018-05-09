import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import PropTypes from 'prop-types';
import {
   ImageButton,
   ProjectBio
} from './Projects.style';
import { Container } from '../../theme/grid';

class Projects extends Component {
 render () {
  return (
     <Container>
       <h1>These are the Projects I worked on</h1>
       <Zoomy
          imageUrl={require('../../assets/proj-todoapp.jpg')}
          renderThumbnail={({ showImage }) => 
          <ImageButton onClick={showImage}>
           <img
          src={require('../../assets/proj-s-todoapp.jpg')} 
          alt={'todo app'} 
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
        <ProjectBio>pim</ProjectBio>
        <div>pim</div>
        <Zoomy
          imageUrl={require('../../assets/proj-dogsperience.jpg')}
          renderThumbnail={({ showImage }) => 
          <ImageButton onClick={showImage}>
           <img
          src={require('../../assets/proj-s-dogsperience.jpg')} 
          alt={'dogsperience'} 
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
     </Container>
  );
 }
}

export default Projects;