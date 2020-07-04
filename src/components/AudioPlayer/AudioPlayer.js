import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './AudioPlayer.css';

export default class AudioPlayer extends Component {
    render() {
        const { isMenuOpen } = this.props;
        return (
            <div className="audio-wrap">
                <div className={`audio-description ${isMenuOpen && "audio-description-white"}`}>Background music</div>
                <ReactAudioPlayer
                    src={'images/1.mp3'}
                    controls
                    className="audio"
                />
            </div>
        )
    }
}