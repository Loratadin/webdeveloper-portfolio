import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class WhenInView extends Component {
 constructor(props) {
  this.state = {
    isInView: false
  }
 }
 onEnter () {}
 render () {
  return (
   <div>
     <Waypoint onEnter={this.onEnter}></Waypoint>
   </div>
  );
 }
}

export default WhenInView;