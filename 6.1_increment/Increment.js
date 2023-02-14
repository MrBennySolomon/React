import React, {useState} from 'react';

const Increment = (props) => {
  let [counter, setCounter] = useState(Number(props.counter));

  const clickHandler = () => {
    console.log('CLICKED');
    setCounter(Number(counter) + 1);
  }
  return (
    <button onClick={clickHandler}>{counter}</button>
  )
}

export default Increment