import React, { Component } from 'react';
import styled from 'styled-components';
import Container from '../../theme/grid/container';

const Image = styled.img`
   width: 100%;
`;

export default class Home extends Component {


  render() {
    return (
      <Container>
        <h1>Hi Home!</h1>
        <Image src={require('../assets/us.jpg')} alt="webdevelopers-family"/> 
        <p>Thank you for visiting this website and being interested to know who I am. My name is Tania, and Shulga is my last name. I am from Belarus, therefore, my name is spelled like Tatsiana Shulha in my driving license.
        </p>
      </Container>
    );
  }
 }