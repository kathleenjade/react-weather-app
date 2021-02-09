import './App.css';
import Weather from './Weather'

function App() {
  return (
    <div className="App">
      <div className="container cool">
      <Weather defaultCity="London" />
      </div>
      <h2> This was coded by Kath Escote and is {" "}
        <a href="https://github.com/kathleenjade/react-weather-app" target="_blank" rel="noreferrer">
        open-sourced on Github.
        </a>
      </h2>
    </div>
  );
}

export default App;
