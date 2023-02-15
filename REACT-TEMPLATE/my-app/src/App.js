import './App.css';
import { useState } from 'react';
import data from './data';
import Name from './Name';
import Card from './Card';

function App() {
  const [allNames, setAllNames] = useState(() => data.map((person) => person.name))
  const [bornBefore1990, setBornBefore1990] = useState(() => data.filter((person) => Number((person.birthday.split('-'))[2]) < 1990))

  return (
    <div className='./App.css'>
      <Name names={allNames}/>
      <div className='flex'>
      {bornBefore1990.map((person) => <Card key={person.name+person.birthday} person={person}/>)}
      </div>
    </div>
    
  );
}

export default App;
