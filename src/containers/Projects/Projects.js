import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import PropTypes from 'prop-types';
import {
   ImageButton,
   ProjectBio,
   ProjectWrapper,
   Number
} from './Projects.style';
import { Container, Relative } from '../../theme/grid';
import { Link } from '../../theme/types';
import { Background } from '../App/App.style';

class Projects extends Component {
 render () {
  return (
     <Container>
       <Background><img src={require('../../assets/us-bg.png')} alt={'Us'}/></Background>
       <h1>These are the Projects I worked on</h1>
       <ProjectWrapper>
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
        <ProjectBio>
        <Relative>
         <Number>
           <h3>01</h3>
         </Number>
         </Relative>
         <h2>React based <Link href="https://github.com/Loratadin/react-todo-app" target="_blank">To do App</Link></h2>
         <p>
         Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus lobortis eget turpis at tempor. In quis lobortis est, sit amet placerat mauris. Quisque pulvinar justo quis ipsum efficitur, id finibus risus blandit. Fusce interdum pretium nunc, dictum efficitur odio venenatis eget.
         </p>
        </ProjectBio>
       </ProjectWrapper>


       <ProjectWrapper>
       <ProjectBio>
       <Relative>
         <Number>
           <h3>02</h3>
         </Number>
         </Relative>
       <h2><Link href="https://github.com/Loratadin/Dogsperience" target="_blank">Dogsperience</Link> Concept</h2>
         <p>
         Donec ullamcorper congue elit sit amet gravida. Fusce blandit condimentum leo a mattis. Donec nec nulla in mi dignissim condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac dolor viverra, scelerisque diam eleifend, sodales tortor.
         </p>
        </ProjectBio>
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
       </ProjectWrapper>
       
        
     </Container>
  );
 }
}

export default Projects;