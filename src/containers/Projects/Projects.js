import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import PropTypes from 'prop-types';

class Projects extends Component {
 render () {
  return (
     <div>
       <h1>These are the Projects I worked on</h1>
       <Zoomy
          imageUrl={require('../../assets/proj-todoapp.jpg')}
          renderThumbnail={({ showImage }) => 
          <img src={require('../../assets/proj-s-todoapp.jpg')} alt={'todo app'} onClick={showImage}/>
           }
          scale={[1.1, 1.1]}
          imageProps={{
          style: {
          width: '100vw',
          height: 'auto'
    }
  }}
/>
     </div>
  );
 }
}

export default Projects;