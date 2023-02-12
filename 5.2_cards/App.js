import Card from './Card';
import './App.css';
import image from './img.jpg';

function App() {
  return (
    <div className="App">
      <Card img={image} title="title 1" description="description 1" links={['link 1', 'link 2']}/>
      <Card img={image} title="title 2" description="description 2" links={['link 1', 'link 2']}/>
      <Card img={image} title="title 3" description="description 3" links={['link 1', 'link 2']}/>
    </div>
  );
}

export default App;
