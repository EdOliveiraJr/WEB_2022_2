import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import logo from './logo.svg';
import './App.css';
import Arena from './components/questao1/Arena';
import Enemy from './components/questao1/Enemy';
import Hero from './components/questao1/Hero';
import {WolverineImg, MagnetoImg} from './components/questao1/links.js'
import World from "./components/questao1/World";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <World titulo="Multiverso Marvel">
        <Arena titulo="ARENA MARVEL">
          <Hero name="Wolverine" image={WolverineImg}></Hero>
          <Enemy name="Magneto" image={MagnetoImg} ></Enemy>
        </Arena>
        <Arena titulo="ARENA MARVEL">
        <Hero name="Wolverine" image={WolverineImg}></Hero>
        <Enemy name="Magneto" image={MagnetoImg} ></Enemy>
        </Arena>
        <Arena titulo="ARENA MARVEL">
          <Hero name="Wolverine" image={WolverineImg}></Hero>
          <Enemy name="Magneto" image={MagnetoImg} ></Enemy>
        </Arena>
      </World>
      

    </div>
  );
}

export default App;
