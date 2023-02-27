import './App.css';
import Todo from './Todo';
import data from './data';
function App() {
  return (
    <div className="App">
      <Todo data={data}/>
    </div>
  );
}

export default App;
