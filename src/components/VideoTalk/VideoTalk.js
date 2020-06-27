import React, { Component } from 'react';
import { H2 } from '../../theme/types';
import { VideoContainer } from '../../containers/AboutMe/AboutMe.style';
import "./videoTalk.css";

export default class VideoTalk extends Component {
    state = {
        isVideoPlaying: false,
        progress: "0",
    };
    componentDidUpdate() {
        if (this.state.isVideoPlaying === true) {
            setTimeout(() => {
                this.updateProgress();
              }, 1);
        }
    }

    toggleVideoPlay = () => {
        this.setState({ isVideoPlaying: !this.state.isVideoPlaying });
        const player = document.getElementById("player");
        if (!this.state.isVideoPlaying) {
            player.play();
        } else {
            player.pause();
        }
    }

    updateProgress = () => {
        const player = document.getElementById("player");
        const percentage = Math.floor((100 / player.duration) * player.currentTime);
        this.setState({ progress: percentage });
    }

    startPlayingFrom = e => {
        console.log("e.clientX", e.clientX);
        console.log("innerWidth", window.innerWidth);
    }

    render() {
        const { isVideoPlaying, progress } = this.state;
        const isVideoFinished = progress === 100;
        console.log("P", progress)
        return (
            <div>
                <H2 align="left">What does programming mean to you?</H2>
                <VideoContainer>
                    <div  className="video-talk__wrapper">
                        <video onClick={this.toggleVideoPlay} id="player" className="video-talk__video" >
                            <source type="video/mp4" src="https://s3.amazonaws.com/webdeveloper-portfolio-assets/about-me.mp4"/>
                        </video>
                        <div className="video-talk__controls">
                            <div onClick={this.toggleVideoPlay} className={`${!isVideoPlaying || isVideoFinished ? "video-talk__control-wrap" : "video-talk__control-hidden"}`}>
                                <img className={`${isVideoPlaying ? "video-talk__control-hidden" : "video-talk__control-img"}`} src={require('../../assets/play-icon.svg')} alt="play"/>
                            </div>
                            <div onClick={this.toggleVideoPlay} className={`${isVideoPlaying ? "video-talk__control-wrap" : "video-talk__control-hidden"}`}>
                                <img className={`${isVideoPlaying ?  "video-talk__control-img" : "video-talk__control-hidden"}`} src={require('../../assets/pause.svg')} alt="pause"/>
                            </div>
                            {/* <input  onClick={(e) => this.startPlayingFrom(e)} className="video-talk__progress" type="range" min={0} max={100} step={0.01} value={progress} autocomplete="off" /> */}
                            <div onClick={(e) => this.startPlayingFrom(e)} className="video-talk__progress">
                                <div className="video-talk__progress-fill" style={{ width: progress }}/>
                            </div>
                        </div>
                    </div>
                </VideoContainer>
            </div>
        );
    }
}
