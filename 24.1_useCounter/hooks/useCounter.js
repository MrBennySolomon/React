import { useState } from 'react';


const useCounter = (num) => {
  const [counter, setCounter] = useState(num);

  

  const addOne = () => {
    setCounter((prev) => prev + 1); 
    console.log(counter)
    return counter;
  }
  const removeOne = () => {
    setCounter((prev) => prev - 1); 
    return counter;
  }
  const double = () => {
    setCounter((prev) => prev * 2); 
    return counter;
  }
  const divide = () => {
    setCounter((prev) => prev / 2); 
    return counter;
  }

  return {
    counter: counter,
    addOne: addOne,
    removeOne: removeOne,
    double: double,
    divide: divide
  };
}














export default useCounter;