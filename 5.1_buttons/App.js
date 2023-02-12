import Button from './Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button text="Important" bold="true"/>
      <Button text="Not Important" bold="false"/>
    </div>
  );
}

export default App;
