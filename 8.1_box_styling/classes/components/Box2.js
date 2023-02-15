import React from 'react';
import Box3 from './Box3';
import '../Box.css';

class Box2 extends React.Component {
  render() {
    return (
      <div classList='box2'>
        <Box3/>
      </div>
    );
  }
}

export default Box2;