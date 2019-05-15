import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default class AudioPlayer extends Component { 
    render() {
        return (
            <React.Fragment>
                <ReactAudioPlayer
                    src={require('../../assets/1.mp3')}
                                controls
                />
            </React.Fragment>
        )
    }
}