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

class ToDoApp extends Component {
  render() {
    return (
      <ProjectWrapper>
        <Zoomy href="http://projects.loratadin.com.s3-website-us-east-1.amazonaws.com/react-todo-app/" target="_blank">
          <img
            src={require('../assets/proj-s-todoapp.jpg')}
            alt={'react todo app'}
          />
        </Zoomy>
        <ProjectBio>
          <Relative>
            <Number>
              <h3>07</h3>
            </Number>
          </Relative>
          <h2>React based <Link href="http://projects.loratadin.com.s3-website-us-east-1.amazonaws.com/react-todo-app/" target="_blank">To do App</Link></h2>
          <p>
            Implemented a fast performing application which allows creating, editing and deleting tasks. Created reusable components to make the application scalable. Implemented a validation, so that the app shows error messages if a task already exists or a user is trying to save an empty task.
        <GitLink
              href="https://github.com/Loratadin/react-todo-app"
              target="_blank"><img src={require('../assets/github-dark.png')}
                alt={'GitHub'} />
            </GitLink>
          </p>
        </ProjectBio>
      </ProjectWrapper>
    );
  }
}

export default ToDoApp;
