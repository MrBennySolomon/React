import React from 'react'
import './Card.css';

const Card = (props) => {
  
  return (
    <div className='card'>
      <h3>{props.turtle.name}</h3>
      <img src={props.turtle.img} alt={props.turtle.name}/>
      <h4>Toppings</h4>
      {props.turtle.pizzaToppings.map((top) => <button key={top.img} onClick={() => props.toppingsHandler(top.name)}>{top.name}</button>)}
    </div>
  )
}

export default Card