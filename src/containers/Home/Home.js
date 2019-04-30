import React, { Component } from 'react';
import  './home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home__wrapper">
        <div className="home-socials__wrapper">
          <div className="home__socials">
            <a className="home-socials__link" href="https://github.com/Loratadin" target="_blank" rel="noopener noreferrer" >
              <img className="home-socials__image" src={require('../../assets/github.png')} alt="github" />
            </a>
          </div>
          <div className="home__socials">
            <a className="home-socials__link" href="mailto:taniashulha@gmail.com">
              <img className="home-socials__image" src={require('../../assets/email.png')} alt={'email'} />
            </a>
          </div>
          <div className="home__socials">
            <a className="home-socials__link" href="https://www.linkedin.com/in/tatsiana-shulha-450413b8/" target="_blank" rel="noopener noreferrer" >
              <img className="home-socials__image" src={require('../../assets/linkedin.png')} alt={'linkedin'} />
            </a>
          </div>
        </div>
        <div className="home__hero">
          <h1> &lt; TaniaShulga / &gt; </h1>
          <h2>Front-end Developer</h2>
        </div>
      </div>
    );
  }
}