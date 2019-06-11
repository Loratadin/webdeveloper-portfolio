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

class Dogsperience extends Component {
	render() {
		return (
			<ProjectWrapper>
				<ProjectBio>
					<Relative>
						<Number>
							<h3>04</h3>
						</Number>
					</Relative>
					<h2><Link href="http://projects.loratadin.com.s3-website-us-east-1.amazonaws.com/react-dog-app-tutorial/" target="_blank">Dog Breed Finder</Link> built in React</h2>
					<p>
						Implemented a React based application that asynchronously gets dog breed names and images from an API. Applied mobile first responsive styles.
        				<GitLink
							href="https://github.com/Loratadin/react-dog-app-tutorial"
							target="_blank"
						>
							<img src={require('../assets/github-dark.png')} alt={'GitHub'} />
						</GitLink>
					</p>
				</ProjectBio>
				<Zoomy href="http://projects.loratadin.com.s3-website-us-east-1.amazonaws.com/react-dog-app-tutorial/" target="_blank">
					<img
						src={require('../assets/proj-s-dog-breed.jpg')}
						alt={'dog breed app'}
					/>
				</Zoomy>
			</ProjectWrapper>
		);
	}
}

export default Dogsperience;