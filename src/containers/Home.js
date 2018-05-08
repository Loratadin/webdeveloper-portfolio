import React, { Component } from 'react';
import styled from 'styled-components';

const Image = styled.img`
   width: 100%;
`;

export default class Home extends Component {


  render() {
    return (
      <div>
        <h1>Hi Home!</h1>
        <Image src={require('../assets/us.jpg')} alt="webdevelopers-family"/> 
        <p>Maecenas facilisis dolor ornare tellus tincidunt condimentum. Quisque massa ante, porttitor at mauris vel, sagittis volutpat neque. Nam iaculis lobortis sapien, a elementum risus luctus id. Nullam accumsan, tortor ac feugiat eleifend, tortor est ultrices justo, sed suscipit odio odio quis est. Donec a mattis ante. Vestibulum volutpat congue mi sit amet condimentum. Nullam ac sapien vel turpis finibus imperdiet et ac ipsum.
        </p>
      </div>
    );
  }
 }