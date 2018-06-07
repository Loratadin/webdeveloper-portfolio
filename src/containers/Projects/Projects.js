import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
   ImageButton,
   ProjectBio,
   ProjectWrapper,
   Number,
   GitLink
} from './Projects.style';
import { Container, Relative } from '../../theme/grid';
import { Link } from '../../theme/types';
import { Background } from '../App/App.style';
import WeatherApp from '../../components/WeatherApp';
import ToDoApp from '../../components/ToDoApp';
import Montessori from '../../components/Montessori';
import Coffeeshop from '../../components/Coffeeshop';
import Dogsperience from '../../components/Dogsperience';

class Projects extends Component {
 render () {
  return (
    <Container>
      <Background><img src={require('../../assets/us-bg.png')} alt={'Us'}/></Background>
        <h1>These are the Projects I worked on</h1>
 
        <ToDoApp/>
        <Montessori/>
        <Coffeeshop/>
        <Dogsperience/>

       <ProjectWrapper>
       <Zoomy
          imageUrl={require('../../assets/proj-mdportfolio.jpg')}
          renderThumbnail={({ showImage }) => 
          <ImageButton onClick={showImage}>
           <img
          src={require('../../assets/proj-s-mdportfolio.jpg')} 
          alt={'professional portfolio'} 
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
           <h3>05</h3>
         </Number>
         </Relative>
         <h2><Link href="http://projects.loratadin.com.s3-website-us-east-1.amazonaws.com/md-portfolio/" target="_blank">Portfolio</Link> Concept for a Doctor of Medicine</h2>
         <p>
         Created design and implemented a fully responsive personal portfolio concept for a medical professional. Integrated JavaScript for navigation menu. Wrote modular, mobile-first CSS with help of SASS preprocessor. Used Parcel as a module bundler. Created contact form and animated gallery.  
         <GitLink 
         href="https://github.com/Loratadin/md-portfolio" 
         target="_blank"><img src={require('../../assets/github-dark.png')} 
         alt={'GitHub'}/>
         </GitLink>
         </p>
        </ProjectBio>
       </ProjectWrapper>

       <WeatherApp/>
       
        
     </Container>
  );
 }
}

export default Projects;