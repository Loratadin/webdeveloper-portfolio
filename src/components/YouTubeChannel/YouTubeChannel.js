import React, { Component } from 'react';
import { H2 } from '../../theme/types';
import "./YouTubeChannel.css";

export default class YouTubeChannel extends Component {
    render() {
        return (
            <div className="youtube__wrap">
                <H2 align="right">Why do you publish videos on YouTube?</H2>
                <H2 align="center">There are topics that draw my attention because I faced challenges and after a long struggle found out "how it works". For some questions I couldn't find an answer on YouTube, so there was a space to create one by myself.
                </H2>
                <div className="youtube__container">
                    <a href="https://www.youtube.com/watch?v=j69P0eUfVPc&t=40s" target="blank" rel="noopener" className="youtube__thumbnail-wrap">
                        <img className="youtube__thumbnail" alt="" src={require('../../assets/you-thumb-1.jpg')}/>
                    </a>
                    <a href="https://www.youtube.com/watch?v=gwGvu8tIPkY" target="blank" rel="noopener" className="youtube__thumbnail-wrap">
                        <img className="youtube__thumbnail" alt="" src={require('../../assets/you-thumb-2.jpg')}/>
                    </a>
                    <a href="https://www.youtube.com/watch?v=auN9GaddfoU" target="blank" rel="noopener" className="youtube__thumbnail-wrap">
                        <img className="youtube__thumbnail" alt="" src={require('../../assets/you-thumb-3.jpg')}/>
                    </a>
                    <a href="https://www.youtube.com/watch?v=yl9G7KzEQNs" target="blank" rel="noopener" className="youtube__thumbnail-wrap">
                        <img className="youtube__thumbnail" alt="" src={require('../../assets/you-thumb-4.jpg')}/>
                    </a>
                    <a href="https://www.youtube.com/watch?v=cDm09DK7YW0&t=727s" target="blank" rel="noopener" className="youtube__thumbnail-wrap">
                        <img className="youtube__thumbnail" alt="" src={require('../../assets/you-thumb-5.jpg')}/>
                    </a>
                    <a href="https://www.youtube.com/watch?v=c4XG6df12d4&t=53s" target="blank" rel="noopener" className="youtube__thumbnail-wrap">
                        <img className="youtube__thumbnail" alt="" src={require('../../assets/you-thumb-6.jpg')}/>
                    </a>
                </div>
            </div>
        )
    }
}