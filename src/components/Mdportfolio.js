import React, { Component } from 'react';
import {
	ProjectBio,
	ProjectWrapper,
	Number,
	GitLink,
	Zoomy
} from '../containers/Projects/Projects.style';
import { Relative } from '../theme/grid';
import { Link } from '../theme/types';

class Mdportfolio extends Component {
	render() {
		return (
			<ProjectWrapper>
				<Zoomy href="http://projects.loratadin.com.s3-website-us-east-1.amazonaws.com/md-portfolio/" target="_blank">
					<img
						src={require('../assets/proj-s-mdportfolio.jpg')}
						alt={'MD portfolio'}
					/>
				</Zoomy>
				<ProjectBio>
					<Relative>
						<Number>
							<h3>05</h3>
						</Number>
					</Relative>
					<h2><Link href="http://projects.loratadin.com.s3-website-us-east-1.amazonaws.com/md-portfolio/" target="_blank">Portfolio</Link> Concept for a Doctor of Medicine</h2>
					<p>
						Created design and implemented a fully responsive personal portfolio concept for a medical professional. Integrated JavaScript for navigation menu. Wrote modular, mobile-first CSS with help of SASS preprocessor. Used Parcel as a module bundler. Created contact form and animated gallery.
        				<GitLink
							href="https://github.com/Loratadin/md-portfolio"
							target="_blank"
						>
							<img src={require('../assets/github-dark.png')} alt={'GitHub'} />
						</GitLink>
					</p>
				</ProjectBio>
			</ProjectWrapper>
		);
	}
}

export default Mdportfolio;