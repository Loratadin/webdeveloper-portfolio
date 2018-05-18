import React, { Component } from 'react';
import { H2 }  from '../../theme/types';
import { MP3Player, MP3PlayerWrapper, ColumnContainer } from './AudioMusic.style';

class AudioMusic extends Component {
 render() {
  return (
   <div>
   <H2 align="right">Why did you decide to learn coding?</H2>
          <H2 align="center">Well, because it's something you can do while listening to music.</H2>
          <H2 align="center">Just kidding;) Enjoy the music as a background while you are my guest here.</H2>
          <MP3PlayerWrapper>
           <img src={require('../../assets/thumb1.jpg')} alt={'Milo Bice'}/>
           <ColumnContainer>
           <p>Milo Bice - Kljucko</p>
           <MP3Player
            src={require('../../assets/1.mp3')}
            controls
           />
           </ColumnContainer>
          </MP3PlayerWrapper>
          <MP3PlayerWrapper>
          <img src={require('../../assets/thumb2.jpg')} alt={'Taylor Swift'}/>
          <ColumnContainer>
          <p>Taylor Swift - Delicate</p>
           <MP3Player
            src={require('../../assets/2.mp3')}
            controls
           />
           </ColumnContainer>
           </MP3PlayerWrapper>
           <MP3PlayerWrapper>
           <img src={require('../../assets/thumb3.jpg')} alt={'Passenger'}/>
           <ColumnContainer>
           <p>Passenger - Let Her Go</p>
           <MP3Player
            src={require('../../assets/3.mp3')}
            controls
            />
            </ColumnContainer>
            </MP3PlayerWrapper>
    </div>
  );
 }
}

export default AudioMusic;