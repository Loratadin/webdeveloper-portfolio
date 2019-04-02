import React from 'react';
// import Home from './containers/Home/Home';
import HomeNew from './containers/Home/HomeNew';
import App from './containers/App/App';
import Projects from './containers/Projects/Projects';
import AboutMe from './containers/AboutMe/AboutMe';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.scss';

export default (
    <BrowserRouter>
        <div>
            <Route path="/" component={App} />
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" component={HomeNew} />
            <Route path="/projects" component={Projects} />
            <Route path="/about-me" component={AboutMe} />
        </div>
    </BrowserRouter>
);