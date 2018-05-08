import React, { Component } from 'react';

export default class Home extends Component {


  render() {
    return (
      <div>
        <h1>Hi Home!</h1>
        <img src={require('../assets/us.jpg')} alt="webdevelopers-family"/> 
      </div>
    );
  }
 }