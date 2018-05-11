import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Container } from '../../theme/grid';
import {
  /*Image,*/
  HeroImage,
  RevealP
} from './Home.style';
import WhenInView from '../../components/WhenInView/WhenInView';
import { Background } from '../App/App.style';


export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <Background><img src={require('../../assets/doggy.png')} alt={'Doggy'}/></Background>
        <h1>Hi Home!</h1>
        <HeroImage>
          <h1> &lt; ... &gt; </h1>
          <h2>Front-end Developer</h2>
        </HeroImage>
        {/*<Image src={require('../../assets/us.jpg')} alt="webdevelopers-family"/> */}
        <WhenInView>
          {( { isInView } ) => 
             <RevealP hide={!isInView}>Thank you for visiting this website and being interested to know who I am. My name is Tania, and Shulga is my last name. I am from Belarus, therefore, my name is spelled like Tatsiana Shulha in my driving license.
             </RevealP>
        }
        </WhenInView>
        <WhenInView>
          {( { isInView } ) => 
             <RevealP hide={!isInView}>Thank you for visiting this website and being interested to know who I am. My name is Tania, and Shulga is my last name. I am from Belarus, therefore, my name is spelled like Tatsiana Shulha in my driving license.
             </RevealP>
        }
        </WhenInView>
        <WhenInView>
          {( { isInView } ) => 
             <RevealP hide={!isInView}>Thank you for visiting this website and being interested to know who I am. My name is Tania, and Shulga is my last name. I am from Belarus, therefore, my name is spelled like Tatsiana Shulha in my driving license.
             </RevealP>
        }
        </WhenInView>
        <WhenInView>
          {( { isInView } ) => 
             <RevealP hide={!isInView}>Thank you for visiting this website and being interested to know who I am. My name is Tania, and Shulga is my last name. I am from Belarus, therefore, my name is spelled like Tatsiana Shulha in my driving license.
             </RevealP>
        }
        </WhenInView>
      </Container>
    );
  }
 }