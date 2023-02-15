import React from 'react'
import './Name.css';

const Name = (props) => {
  return (
    <div>
      <ul>
      {props.names.map((name) => <li key={name}>{name}</li>)}
      </ul>
    </div>
  )
}

export default Name