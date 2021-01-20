import './App.css';
import Weather from './Weather'

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      </div>
      <footer> This was coded by Kath Escote and is {" "}
        <a href="https://github.com/kathleenjade/react-weather-app" target="_blank">
        open-sourced on Github.
        </a>
      </footer>
    </div>
  );
}

export default App;
