import React from 'react';
import Home from './containers/Home/Home';
import App from './containers/App/App';
import Projects from './containers/Projects/Projects';
import AboutMe from './containers/AboutMe/AboutMe';
import { BrowserRouter, Route } from 'react-router-dom';

export default (
<BrowserRouter>
<div>
<Route path="/" component={App} />
<Route exact path="/" component={Home} />
<Route path="/projects" component={Projects} />
<Route path="/aboutme" component={AboutMe} />
</div>
</BrowserRouter>
);