import React from 'react'
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      {props.person.name}
      {props.person.birthday}
    </div>
  )
}

export default Card