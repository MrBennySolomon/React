import React from 'react';
import Box2 from './Box2';
import '../Box.css';

class Box1 extends React.Component {
  render() {
    return (
      <div classList='box1'>
        <Box2/>
      </div>
    );
  }
}

export default Box1;