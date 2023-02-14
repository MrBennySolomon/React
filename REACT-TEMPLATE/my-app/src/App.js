import './App.css';
import IncrementAndDecrement from './IncrementAndDecrement';
function App() {
  return (
    <div className="App">
      <IncrementAndDecrement counter='0' zero='zero' positive='positive' negative='negative'/>
    </div>
  );
}

export default App;
