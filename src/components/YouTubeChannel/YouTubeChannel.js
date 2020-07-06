import React, { Component } from 'react';
import "./YouTubeChannel.css";

export default class YouTubeChannel extends Component {
    render() {
        return (
            <div className="youtube__wrap">
                <div className="question">Why do you publish videos on YouTube?</div>
                <div className="answer">There are topics that draw my attention because I faced challenges and after a long struggle found out "how it works". For some questions I couldn't find an answer on YouTube, so there was a space to create one by myself.
                </div>
                <div className="youtube__container">
                    <a href="https://youtu.be/5JmGg8vidZM" target="blank" rel="noopener" className="youtube__thumbnail-wrap">
                        <img className="youtube__thumbnail" alt="" src={require('../../assets/you-thumb-1.jpg')}/>
                    </a>
                    <a href="https://youtu.be/j69P0eUfVPc" target="blank" rel="noopener" className="youtube__thumbnail-wrap">
                        <img className="youtube__thumbnail" alt="" src={require('../../assets/you-thumb-2.jpg')}/>
                    </a>
                    <a href="https://youtu.be/NBLN7VKZZig" target="blank" rel="noopener" className="youtube__thumbnail-wrap">
                        <img className="youtube__thumbnail" alt="" src={require('../../assets/you-thumb-3.jpg')}/>
                    </a>
                    <a href="https://youtu.be/c4XG6df12d4" target="blank" rel="noopener" className="youtube__thumbnail-wrap">
                        <img className="youtube__thumbnail" alt="" src={require('../../assets/you-thumb-4.jpg')}/>
                    </a>
                    <a href="https://youtu.be/auN9GaddfoU" target="blank" rel="noopener" className="youtube__thumbnail-wrap">
                        <img className="youtube__thumbnail" alt="" src={require('../../assets/you-thumb-5.jpg')}/>
                    </a>
                    <a href="https://youtu.be/Iwmsl8zXg_8" target="blank" rel="noopener" className="youtube__thumbnail-wrap">
                        <img className="youtube__thumbnail" alt="" src={require('../../assets/you-thumb-6.jpg')}/>
                    </a>
                </div>
            </div>
        )
    }
}