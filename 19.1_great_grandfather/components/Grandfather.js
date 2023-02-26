import React from 'react';
import Father from './Father';

const context = React.createContext([]);

const Grandfather = () => {
  return (
    <Father/>
  )
}

export default Grandfather