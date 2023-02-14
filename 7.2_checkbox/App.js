import './App.css';
import Checkbox from './Checkbox';
import { useState } from 'react';

function App() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(true);
  const [checkbox4, setCheckbox4] = useState(true);
  
  return (
    <div>
      <input onChange={() => setCheckbox1(!checkbox1)} type='checkbox' checked={checkbox1}/>
      <label>I read the term of the app</label>
      <input onChange={() => setCheckbox2(!checkbox2)} type='checkbox' checked={checkbox2}/>
      <label>I accept the term of the app</label>
      <input onChange={() => setCheckbox3(!checkbox3)} type='checkbox' checked={checkbox3}/>
      <label>I want to get the weekly news letter</label>
      <input onChange={() => setCheckbox4(!checkbox4)} type='checkbox' checked={checkbox4}/>
      <label>I want to get sales and offers</label>
    </div>
  );
}

export default App;
