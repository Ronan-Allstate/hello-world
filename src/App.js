import logo from './logo.svg';
import './App.css';
import  Greeting from './components/Greeting/Greeting'
import Songs from './components/Songs/Songs';
import SongList from './components/Songs/SongList';

function App() {
  return (
    <div className="App">
      <p>The greeting is: </p>
      <Greeting name="Ronan" age="24"/>
      <SongList/>
    </div>
  );
}

export default App;
