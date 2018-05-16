import React, { Component } from 'react';
import { LimeButton } from '../ShowMeVideo/ShowMeVideo.style';
import { H2 }  from '../../theme/types';
import { MP3Player, MP3PlayerWrapper } from './ShowMeAudio.style';

class ShowMeAudio extends Component {
 constructor(props) {
  super(props);

  this.state= {
      showMe: false
  };
}

operation() {
  this.setState({
    showMe: !this.state.showMe
  })
}
 render() {
  return (
   <div>
   <H2 align="left">Why did you decide to learn coding?</H2>
   <LimeButton onClick={() => this.operation()}><img src={require('../../assets/lime.png')} alt={'lime'}/></LimeButton>
      { this.state.showMe ? 
      <div>
          <H2 align="center">Well, because it's something you can do while listening to music.</H2>
          <H2 align="center">Just kidding;) Enjoy the music as a background while you are my guest here.</H2>
          <MP3PlayerWrapper>
           <p>Milo Bice - Kljucko</p>
           <MP3Player
            src={require('../../assets/1.mp3')}
            controls
           />
          </MP3PlayerWrapper>
          <MP3PlayerWrapper>
          <p>Taylor Swift - Delicate</p>
           <MP3Player
            src={require('../../assets/2.mp3')}
            controls
           />
           </MP3PlayerWrapper>
           <MP3PlayerWrapper>
           <p>Passenger - Let Her Go</p>
           <MP3Player
            src={require('../../assets/3.mp3')}
            controls
            />
            </MP3PlayerWrapper>
         </div>
    : null}
    </div>
  );
 }
}

export default ShowMeAudio;