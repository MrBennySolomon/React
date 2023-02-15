import React from 'react';
import Box4 from './Box4';
import '../Box.css';

class Box3 extends React.Component {
  render() {
    return (
      <div classList='box3'>
        <Box4/>
        <Box4/>
      </div>
    );
  }
}

export default Box3;