import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './AudioPlayer.css';

export default class AudioPlayer extends Component { 
    render() {
        return (
            <React.Fragment>
                <ReactAudioPlayer
                    src={require('../../assets/1.mp3')}
                    controls
                    className="audio"
                />
            </React.Fragment>
        )
    }
}