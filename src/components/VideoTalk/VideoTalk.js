import React, { Component } from 'react';
import "./videoTalk.css";

export default class VideoTalk extends Component {
    state = {
        isVideoPlaying: false,
        isGifHidden: false,
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

    switchFromGifToVideo = () => {
        this.setState({ isGifHidden: true });
        this.toggleVideoPlay();
    }
    switchFromVideoToGif = () => {
        const player = document.getElementById("player");
        player.pause();
        this.setState({ isGifHidden: false, isVideoPlaying: false });
    }

    render() {
        const { isVideoPlaying, progress, isGifHidden } = this.state;
        const isVideoFinished = progress === 100;
        const progressFillWidth = this.getProgressFillWidth();
        return (
            <div className="video-talk__section">
                <div className="video-talk__question">What does programming mean to you?</div>
                <div className={`${isGifHidden ?  "video-talk__wrapper" : "video-talk__wrapper-hidden"}`}>
                    <video onClick={this.toggleVideoPlay} id="player" className="video-talk__video" >
                        <source type="video/mp4" src="https://s3.amazonaws.com/webdeveloper-portfolio-assets/about-me.mp4"/>
                    </video>
                    <div onClick={this.switchFromVideoToGif} className="video-talk__close-button">x</div>
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
                <div className={`${isGifHidden ? "video-talk__grid-container-hidden" : "video-talk__grid-container"}`}>
                    <div className="video-talk__quote-wrapper">
                        <div className="video-talk__quote">
                            Without hard work and discipline it is difficult to be a professional. You can’t cheat the grind, it knows how much you have invested, it won’t give you anything you haven’t worked for.
                        </div>
                    </div>
                    <div className="video-talk__gif-wrapper">
                        <img src={require('../../assets/about-me.gif')} alt="" className="video-talk__gif" />
                        <div onClick={this.switchFromGifToVideo} className="video-talk__gif-watch">
                            <div className="video-talk__gif-watch-content">WATCH</div>
                            <img className="video-talk__gif-watch-icon" src={require('../../assets/play.png')} alt="play"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
