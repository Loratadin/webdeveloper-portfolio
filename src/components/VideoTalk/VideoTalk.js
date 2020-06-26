import React, { Component } from 'react';
import { H2 } from '../../theme/types';
import { VideoContainer } from '../../containers/AboutMe/AboutMe.style';
import "./videoTalk.css";

export default class VideoTalk extends Component {
    state = {
        isVideoPlaying: false,
        progress: "0",
    };

    toggleVideoPlay = key => {
        this.setState({ isVideoPlaying: !this.state.isVideoPlaying });
        const player = document.getElementById("player");
        if (key === "play") {
            player.play();
            this.updateProgress();
        } else {
            player.pause();
        }
    }

    updateProgress = () => {
        const player = document.getElementById("player");
        const percentage = Math.floor((100 / player.duration) * player.currentTime);
        this.setState({ progress: percentage });
    }

    render() {
        const { isVideoPlaying, progress } = this.state;
        return (
            <div>
                <H2 align="left">What does programming mean to you?</H2>
                <VideoContainer>
                    <div  className="video-talk__wrapper">
                        <video id="player" className="video-talk__video" >
                            <source type="video/mp4" src="https://s3.amazonaws.com/webdeveloper-portfolio-assets/about-me.mp4"/>
                        </video>
                        <div className="video-talk__controls">
                            <div onClick={() => this.toggleVideoPlay("play")} className={`${isVideoPlaying ? "video-talk__control-hidden" : "video-talk__control-wrap"}`}>
                                <img className={`${isVideoPlaying ? "video-talk__control-hidden" : "video-talk__control-img"}`} src={require('../../assets/play.svg')} alt="play"/>
                            </div>
                            <div onClick={() => this.toggleVideoPlay("pause")} className={`${isVideoPlaying ? "video-talk__control-wrap" : "video-talk__control-hidden"}`}>
                                <img className={`${isVideoPlaying ?  "video-talk__control-img" : "video-talk__control-hidden"}`} src={require('../../assets/pause.svg')} alt="pause"/>
                            </div>
                            <progress id="progress-bar" className="video-talk__progress" min="0" max="100" value={progress}/>
                        </div>
                    </div>
                </VideoContainer>
            </div>
        );
    }
}
