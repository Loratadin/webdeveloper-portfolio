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

class ToDoApp extends Component {
 render () {
  return (
    <ProjectWrapper>
      <Zoomy
        imageUrl={require('../assets/proj-todoapp.jpg')}
        renderThumbnail={({ showImage }) => 
          <ImageButton onClick={showImage}>
            <img
              src={require('../assets/proj-s-todoapp.jpg')} 
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
        <h2>React based <Link href="http://projects.loratadin.com.s3-website-us-east-1.amazonaws.com/react-todo-app/" target="_blank">To do App</Link></h2>
        <p>
         Implemented a fast performing application which allows creating, editing and deleting tasks. Created reusable components to make the application scalable. Implemented a validation, so that the app shows error messages if a task already exists or a user is trying to save an empty task.
        <GitLink 
          href="https://github.com/Loratadin/react-todo-app" 
          target="_blank"><img src={require('../assets/github-dark.png')} 
          alt={'GitHub'}/>
        </GitLink>
        </p>
      </ProjectBio>
    </ProjectWrapper>
  );
 }
}

export default ToDoApp;
