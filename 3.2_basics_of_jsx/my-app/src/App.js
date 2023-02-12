import logo from './logo.svg';
import './App.css';

function App() {
  const number1 = 5;
  const number2 =6;
  const data = ["hello", "world"];
  const string = "I love React!";
  return (
    <div>
      <div className="App">{`${data[0]} ${data[1]}`}</div>
      <div>{`${number1} + ${number2} = ${number1 + number2}`}</div>
      <div>{`The string’s length is ${string.length}`}</div>
    </div>
  );
}

export default App;
