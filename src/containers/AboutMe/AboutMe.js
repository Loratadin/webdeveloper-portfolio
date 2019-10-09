import React, { Component } from "react";
import { Container } from "../../theme/grid";
import { Background } from "../App/App.style";
import aos from "aos";
import "aos/dist/aos.css";
import VideoInspire from "../../components/VideoInspire/VideoInspire";
import AudioMusic from "../../components/AudioMusic/AudioMusic";
import VideoTalk from "../../components/VideoTalk/VideoTalk";
import YouTubeChannel from "../../components/YouTubeChannel/YouTubeChannel";

class AboutMe extends Component {
  constructor() {
    super();
    aos.init({
      once: true
    });
  }
  render() {
    return (
      <Container>
        <Background>
          <img src="/images/doggy.png" alt="doggy" />
        </Background>
        <h1>About me</h1>
        <VideoInspire data-aos="fade-up" />
        <AudioMusic />
        <VideoTalk />
        <YouTubeChannel/>
      </Container>
    );
  }
}

export default AboutMe;
