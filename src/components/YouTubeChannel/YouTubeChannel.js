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
            </div>
        )
    }
}