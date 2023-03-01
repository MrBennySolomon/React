import React, { useEffect } from 'react';
import useCounter from './hooks/useCounter';
const App = () => {
  const counter = useCounter(5);
  useEffect(() => {
    

  
  console.log('counter.addOne()', counter.addOne());
  }, []);
  
  // console.log(counter.addOne());
  // console.log(counter.addOne());
  // console.log(counter.addOne());

  return (
    <div>App</div>
  )
}

export default App;


