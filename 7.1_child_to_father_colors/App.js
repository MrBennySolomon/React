import './App.css';
import CustomButton from './CustomButton';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');
  const colors = ["blue","red","yellow"];
  
  return (
    <>
      <CustomButton color={colors[0]} handler={setColor}/>
      <CustomButton color={colors[1]} handler={setColor}/>
      <CustomButton color={colors[2]} handler={setColor}/>

      <h1>THE COLOR IS : {color}</h1>
    </>
  );
}

export default App;
