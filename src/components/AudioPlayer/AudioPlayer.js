import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './AudioPlayer.css';

export default class AudioPlayer extends Component { 
    render() {
        return (
            <div className="audio-wrap">
                <div className="audio-description">Background music</div>
                <ReactAudioPlayer
                    src={require('../../assets/1.mp3')}
                    controls
                    className="audio"
                />
            </div>
        )
    }
}