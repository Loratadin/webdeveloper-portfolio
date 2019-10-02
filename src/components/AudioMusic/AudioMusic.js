import React, { Component } from 'react';
import { H2 } from '../../theme/types';
import ReactAudioPlayer from 'react-audio-player';
import { MP3PlayerWrapper, ColumnContainer, MP3PlayerIcon } from './AudioMusic.style';
import "./audioMusic.css";

export default class AudioMusic extends Component {
	render() {
		const audioTracks = [
			{
				thumbnail: 'images/thumb1.jpg',
				alt: 'Milo Bice',
				title: 'Milo Bice - Kljucko',
				asset: 'images//1.mp3',
			},
			{
				thumbnail: 'images/thumb2.jpg',
				alt: 'Taylor Swift',
				title: 'Taylor Swift - Delicate',
				asset: 'images/2.mp3',
			},
			{
				thumbnail: 'images/thumb3.jpg',
				alt: 'Passenger',
				title: 'Passenger - Let Her Go',
				asset: 'images/3.mp3',
			},
		]
		return (
			<div>
				<H2 align="right">Why did you decide to learn coding?</H2>
				<H2 align="center">Well, because it's something you can do while listening to music.</H2>
				<H2 align="center">Just kidding;) Enjoy the music as a background while you are my guest here.</H2>
				{audioTracks.map(track => (
					<MP3PlayerWrapper>
						<MP3PlayerIcon><img src={track.thumbnail} alt={track.alt} /></MP3PlayerIcon>
						<ColumnContainer>
							<p>{track.title}</p>
							<ReactAudioPlayer
								src={track.asset}
								className="player"
								controls
							/>
						</ColumnContainer>
					</MP3PlayerWrapper>
				))}
			</div>
		);
	}
}