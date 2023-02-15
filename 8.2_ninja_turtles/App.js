import React, { useState } from 'react';
import './App.css';
import data from './data.js';
import Card from './Card'
import './Card.css';

const App = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [toppings, setToppings] = useState([]);
  const dataArr = [...data];

  const toppingsHandler = (top) => {
    if (toppings.length >= 5) {
      errorHandler('5 topings is the maximum');
    }else if (!toppings.find((name) => name === top)) {
      errorHandler('');
      setToppings(oldArray => [...oldArray, top]);
    }else{
      errorHandler('cannot duplicate');
    }
  }

  const errorHandler = (text) => {
    setErrorMsg(text);
  }

  return (
    <div className='./App.css'>
      <h1>Ninja Turtles</h1>
      <h2>Order Pizza with the turtles</h2>
      <div className='flex'>
        {dataArr.map((element) => <Card key={element.img} toppingsHandler={toppingsHandler} turtle={element}/>)}
      </div>
      <h4>Our order:</h4>
      <div id='toppings'>{toppings}</div>
      <div id='errorMessage'>{errorMsg}</div>
    </div>

  )
}

export default App;
