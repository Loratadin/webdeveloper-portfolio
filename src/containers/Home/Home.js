import React, { Component } from 'react';
import  './home.css';

export default class Home extends Component {
  state = {
    left: 0
  }
  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove)
  }
  onMouseMove(e) {
    let left = 0
    const  delta = (e.clientX - window.innerWidth / 2) * 0.5;
    left = e.clientX + delta
    console.log("left", left)
    return left
   
  }
  render() {
    
    return (
      <div id="home-container" className="home-container">
        <div id="notes-overlay" className="notes-container">
          <div className="note-wrap note-wrap-first">
            <img className="note-image" src={require('../../assets/note-1.png')} alt="note"/>
          </div>
          <div className="note-wrap note-wrap-second">
            <img className="note-image" src={require('../../assets/note-2.png')} alt="note"/>
          </div>
        </div>
      <div className="home__wrapper">
          <div className="home__hero">
            <h2 className="home__hero-name"> &lt; TaniaShulga / &gt; </h2>
            <h3 className="home__hero-role">Front-end Developer</h3>
          </div>
          <div className="home-socials__wrapper">
          <div className="home__socials-item home__socials-item-01">
            <a className="home-socials__link" href="https://github.com/Loratadin" target="_blank" rel="noopener noreferrer" >
              <img className="home-socials__image" src={require('../../assets/github.png')} alt="github" />
            </a>
          </div>
          <div className="home__socials-item home__socials-item-02">
            <a className="home-socials__link" href="mailto:taniashulha@gmail.com">
              <img className="home-socials__image" src={require('../../assets/email.png')} alt="email" />
            </a>
          </div>
          <div className="home__socials-item home__socials-item-03">
            <a className="home-socials__link" href="https://www.linkedin.com/in/tatsiana-shulha-450413b8/" target="_blank" rel="noopener noreferrer" >
              <img className="home-socials__image" src={require('../../assets/linkedin.png')} alt="linkedin" />
            </a>
          </div>
        </div>
        </div>
        </div>
    );
  }
}