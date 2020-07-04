import React, { Component } from "react";
import "./home.css";

export default class Home extends Component {
  state = {
    isMouseMovingUp: false,
    isMouseMovingDown: false,
  };
  componentDidMount() {
    document.addEventListener("mousemove", this.onMouseMove);
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove = e => {
    let top = false;
    let bottom = false;
    top = e.clientY < window.innerHeight / 2;
    bottom = e.clientY > window.innerHeight / 2;
    this.setState({
      isMouseMovingUp: top,
      isMouseMovingDown: bottom,
    });
  };

  render() {
    const { isMouseMovingUp, isMouseMovingDown } = this.state;
    return (
      <div id="home-container" className="home-container">
        <div className="home__wrapper">
          <div className="home__hero">
            <h2 className="home__hero-name"> &lt; TaniaShulga / &gt; </h2>
            <h3 className="home__hero-role">Front-end Developer</h3>
          </div>
          <div className="home-socials__wrapper">
            <ul className="home__social-items">
              <li className="home__socials-item">
                <a
                  className="home-socials__link home-socials__link-01"
                  href="https://github.com/Loratadin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-github" aria-hidden="true"/>
                </a>
              </li>
              <li className="home__socials-item">
                <a
                  className="home-socials__link home-socials__link-02"
                  href="https://www.linkedin.com/in/tatsiana-shulha-450413b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-linkedin" aria-hidden="true"/>
                </a>
              </li>
              <li className="home__socials-item">
                <a
                  className="home-socials__link home-socials__link-03"
                  href="mailto:taniashulha@gmail.com"
                >
                  <i class="fa fa-envelope" aria-hidden="true"/>
                </a>
              </li>
              <li className="home__socials-item">
                <a
                  className="home-socials__link home-socials__link-04"
                  href="https://twitter.com/PAIRProgrammin1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-twitter" aria-hidden="true"/>
                </a>
              </li>
            </ul>
          </div>
			<div className="home__note-container">
					<div className={
						`home__note-wrap
            ${isMouseMovingUp && "home__note-wrap-shaking"}
            ${isMouseMovingDown && "home__note-wrap-shaking-two"}
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
