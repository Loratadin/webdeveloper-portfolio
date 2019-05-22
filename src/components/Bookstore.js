import React, { Component } from 'react';
import {
   ProjectBio,
   ProjectWrapper,
   Number,
   Zoomy
} from '../containers/Projects/Projects.style';
import { Relative } from '../theme/grid';
import { Link } from '../theme/types';

class Bookstore extends Component {
 render () {
  return (
    <ProjectWrapper>
      <Zoomy href="http://bookstore-app-2018.s3-website-us-east-1.amazonaws.com/" target="_blank">
            <img
              src={require('../assets/proj-s-bookstore.jpg')} 
              alt={'bookstore'} 
            />
      </Zoomy>
      <ProjectBio>
        <Relative>
          <Number>
            <h3>01</h3>
          </Number>
        </Relative>
        <h2>Online <Link href="http://bookstore-app-2018.s3-website-us-east-1.amazonaws.com/" target="_blank">Bookstore</Link></h2>
        <p>
        Created React based bookstore application that fetches a catalog of books from an API. Implemented purchase processing with the help of Redux. Applied responsive styles using SASS to make the site easy maintainable. Implemented inputs validations for the checkout form. 
        </p>
      </ProjectBio>
    </ProjectWrapper>
  );
 }
}

export default Bookstore;
