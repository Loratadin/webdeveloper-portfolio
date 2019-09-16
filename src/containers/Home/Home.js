import React, { Component } from "react";
import "./home.css";

export default class Home extends Component {
  state = {
    isMouseMovingLeft: false,
    isMouseMovingUp: false,
    isMouseMovingDown: false,
    isMouseMovingRight: false
  };
  componentDidMount() {
    document.addEventListener("mousemove", this.onMouseMove);
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove = e => {
    let left = false;
    let right = false;
    let top = false;
    let bottom = false;
    left = e.clientX < window.innerWidth / 2;
    right = e.clientX > window.innerWidth / 2;
    top = e.clientY < window.innerHeight / 2;
    bottom = e.clientY > window.innerHeight / 2;
    console.log("left", left, "right", right, "top", top, "bottom", bottom);
    this.setState({
      isMouseMovingLeft: left,
      isMouseMovingUp: top,
      isMouseMovingDown: bottom,
      isMouseMovingRight: right
    });
  };

  render() {
    const { isMouseMovingLeft, isMouseMovingUp, isMouseMovingDown, isMouseMovingRight } = this.state;
    console.log("Left", isMouseMovingLeft, "Up", isMouseMovingUp, "Down", isMouseMovingDown, "Right", isMouseMovingRight)
    return (
      <div id="home-container" className="home-container">
        <div className="home__wrapper">
          <div className="home__hero">
            <h2 className="home__hero-name"> &lt; TaniaShulga / &gt; </h2>
            <h3 className="home__hero-role">Front-end Developer</h3>
          </div>
          <div className="home-socials__wrapper">
            <div className="home__socials-item home__socials-item-01">
              <a
                className="home-socials__link"
                href="https://github.com/Loratadin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="home-socials__image"
                  src={require("../../assets/github.png")}
                  alt="github"
                />
              </a>
            </div>
            <div className="home__socials-item home__socials-item-02">
              <a
                className="home-socials__link"
                href="mailto:taniashulha@gmail.com"
              >
                <img
                  className="home-socials__image"
                  src={require("../../assets/email.png")}
                  alt="email"
                />
              </a>
            </div>
            <div className="home__socials-item home__socials-item-03">
              <a
                className="home-socials__link"
                href="https://www.linkedin.com/in/tatsiana-shulha-450413b8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="home-socials__image"
                  src={require("../../assets/linkedin.png")}
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
			<div className="home__note-container">
					<div className={
						`home__note-wrap
            ${isMouseMovingLeft && "home__note-wrap-left"}
            ${isMouseMovingRight && "home__note-wrap-right"}
            ${isMouseMovingUp && "home__note-wrap-up"}
            ${isMouseMovingDown && "home__note-wrap-down"}
            `
					}>
					<img
					className="home__note-image"
					src={require("../../assets/note-1.png")}
					alt="note"
					/>
				</div>
			</div>
        </div>
      </div>
    );
  }
}
