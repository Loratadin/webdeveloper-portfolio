import React, { Component } from 'react';
import { VideoContainer } from '../../containers/AboutMe/AboutMe.style';
import ReactPlayer from 'react-player';
import "./videoInspire.css";

class VideoInspire extends Component {
	render() {
		return (
			<div>
				<div className="question">I wrote the questions you might want to ask me. Let's start!</div>
				<div className="question">Tell me something to inspire me today</div>
				<div>
					<div className="answer">
						Ok! All you need to know is that everything is possible. We live in a wonderful world that is full of beauty, charm, and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.
          			</div>
					<VideoContainer>
						<ReactPlayer
							controls
							width="100%"
							height="auto"
							url={'https://s3.amazonaws.com/webdeveloper-portfolio-assets/travel.mp4'} />
					</VideoContainer>
				</div>
			</div>
		);
	}
}

export default VideoInspire;