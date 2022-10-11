import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import logo from './logo.svg';
import './App.css';
import Questao01 from './components/Questao01';
import Questao01A from './components/Questao01A';
import Questao01B from './components/Questao01B';
import Questao02 from "./components/Questão02";

function App() {
  return (
    <div className="App m-4">
      <header className='App-reader m-4'>
        <h1>Desenvolvimento de Softare para Web - Avaliação Parcial 01 </h1>
      </header>
      <div className="m-4">
        <h2>Questão 01</h2>
        <Questao01>
          <Questao01A name="Edvaldo" lastName="Oliveira" curso="Engenharia de Software"></Questao01A>
          <Questao01B></Questao01B>
        </Questao01>
      </div>
      <div className="m-4">
        <h2>Questão 02</h2>
        <Questao02>

        </Questao02>
      </div>
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
    </div>
  );
}

export default App;
