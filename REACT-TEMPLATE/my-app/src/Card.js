import React from 'react'
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      {props.person.name}<br/><br/><hr/>
      {props.person.birthday}<br/><hr/>
      {props.person.favoriteFoods.meats.map(e => <p key={e}>{e}</p>)}<br/><hr/>
      {props.person.favoriteFoods.fish.map(e => <p key={e}>{e}</p>)}<br/><hr/>
    </div>
  )
}

export default Card