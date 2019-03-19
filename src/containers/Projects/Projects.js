import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { Background } from '../App/App.style';
import TeamLogicIT from '../../components/TeamLogicIT';
import Montessori from '../../components/Montessori';
import Coffeeshop from '../../components/Coffeeshop';
import Dogsperience from '../../components/Dogsperience';
import Mdportfolio from '../../components/Mdportfolio';
import WeatherApp from '../../components/WeatherApp';
import ToDoApp from '../../components/ToDoApp';

class Projects extends Component {
  render() {
    return (
      <Container>
        <Background><img src={require('../../assets/us-bg.png')} alt={'Us'} /></Background>
        <h1>These are the Projects I worked on</h1>

        <TeamLogicIT />
        <Montessori />
        <Coffeeshop />
        <Dogsperience />
        <Mdportfolio />
        <WeatherApp />
        <ToDoApp />

      </Container>
    );
  }
}

export default Projects;