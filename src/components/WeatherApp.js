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

class WeatherApp extends Component {
  render() {
    return (
      <ProjectWrapper>
        <ProjectBio>
          <Relative>
            <Number>
              <h3>06</h3>
            </Number>
          </Relative>
          <h2><Link href="http://projects.loratadin.com.s3-website-us-east-1.amazonaws.com/weather-app/" target="_blank">Weather App</Link> on React</h2>
          <p>
            Created React based weather application that fetches data from a weather API. Applied styled components to make the styles more maintainable. Implemented a validation, so that the app doesn’t brake but shows error messages.
        <GitLink
              href="https://github.com/Loratadin/weather-app"
              target="_blank"><img src={require('../assets/github-dark.png')}
                alt={'GitHub'} />
            </GitLink>
          </p>
        </ProjectBio>
        <Zoomy href="http://projects.loratadin.com.s3-website-us-east-1.amazonaws.com/weather-app/" target="_blank">
          <img
            src={require('../assets/proj-s-weather.jpg')}
            alt={'weather app on React'}
          />
        </Zoomy>
      </ProjectWrapper>
    );
  }
}

export default WeatherApp;