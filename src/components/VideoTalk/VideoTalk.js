import React, { Component } from 'react';
import { H2 } from '../../theme/types';
import "./videoTalk.css";

export default class VideoTalk extends Component {
    state = {
        isVideoPlaying: false,
        progressLineWidth: 920,
        progress: 0,
    };
    componentDidUpdate() {
        if (this.state.isVideoPlaying === true) {
            setTimeout(() => {
                this.updateProgress();
              }, 1);
        }
    }

    getProgressFillWidth = () => {
        const { progressLineWidth, progress } = this.state;
        const onePercent = progressLineWidth / 100;
        const progressFillWidth = progress * onePercent;
        console.log("onePercent", onePercent, "progressFillWidth", progressFillWidth)
        return progressFillWidth;
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

    render() {
        const { isVideoPlaying, progress } = this.state;
        const isVideoFinished = progress === 100;
        const progressFillWidth = this.getProgressFillWidth();
        return (
            <React.Fragment>
                <H2 align="left">What does programming mean to you?</H2>
                <div className="video-talk__flex-wrapper">
                    <div className="video-talk__quote-wrapper"></div>
                    <div className="video-talk__gif-wrapper"></div>
                </div>
                <div  className="video-talk__wrapper">
                    <video onClick={this.toggleVideoPlay} id="player" className="video-talk__video" >
                        <source type="video/mp4" src="https://s3.amazonaws.com/webdeveloper-portfolio-assets/about-me.mp4"/>
                    </video>
                    <div className="video-talk__controls">
                        <div onClick={this.toggleVideoPlay} className={`${!isVideoPlaying || isVideoFinished ? "video-talk__control-wrap" : "video-talk__control-hidden"}`}>
                            <img className={`${isVideoPlaying ? "video-talk__control-hidden" : "video-talk__control-img"}`} src={require('../../assets/play.png')} alt="play"/>
                        </div>
                        <div onClick={this.toggleVideoPlay} className={`${isVideoPlaying ? "video-talk__control-wrap" : "video-talk__control-hidden"}`}>
                            <img className={`${isVideoPlaying ?  "video-talk__control-img" : "video-talk__control-hidden"}`} src={require('../../assets/pause.svg')} alt="pause"/>
                        </div>
                        <div  className="video-talk__progress">
                            <div className="video-talk__progress-fill" style={{ width: progressFillWidth }}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
