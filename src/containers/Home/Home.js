import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import {
  /*Image,*/
  HeroImage
} from './Home.style';
import WhenInView from '../../components/WhenInView/WhenInView';


export default class Home extends Component {


  render() {
    return (
      <Container>
        <h1>Hi Home!</h1>
        <HeroImage>
          <h1> &lt; ... &gt; </h1>
          <h2>Front-end Developer</h2>
        </HeroImage>
        {/*<Image src={require('../../assets/us.jpg')} alt="webdevelopers-family"/> */}
        <WhenInView>
          {( { isInView } ) => 
             <p hide={!isInView}>Thank you for visiting this website and being interested to know who I am. My name is Tania, and Shulga is my last name. I am from Belarus, therefore, my name is spelled like Tatsiana Shulha in my driving license.
             </p>
        }
        </WhenInView>
      </Container>
    );
  }
 }