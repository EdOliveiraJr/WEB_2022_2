// import logo from './logo.svg';
import './App.css';
import OlaMundo from './Components/OlaMundo';
// import Estudante from './Components/Estudante';
import {Dog, Cat, Fish} from './Components/Pets';
import Calculadora from './Components/Calculadora';
import IMC from './Components/IMC';
import Grupo from './Components/vingadores/Grupo';
import Heroi from './Components/vingadores/Heroi';
import Disciplina from './Components/universidade/Disciplina';
import Estudante from './Components/universidade/Estudante';
import Pai from './Components/pai&filho/Pai';
import Contador from './Components/estado/Contador';
import VotaCidades from './Components/estado/VotaCidades';

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
      <OlaMundo/>

      <hr/>

      {/* <Estudante
        nome='Edvaldo'
        curso='Engenharia de Software'
        universidade='UFC'
      /> 
      <hr/>
      */}

      <Dog/>
      <Cat/>
      <Fish/>

      <hr/>

      <Calculadora op="SOMA" x={300} y={100}/>
      <Calculadora op="SUB" x={300} y={100}/>
      <Calculadora op="MULT" x={300} y={100}/>
      <Calculadora op="DIV" x={300} y={100}/>

      <hr/>

      <IMC peso={100} altura={1.5}/>

      <hr/>

      <Grupo titulo='Vingadores'>
        <Heroi nome="Viuva Negra" />
        <Heroi nome="Homem de Ferro"/>
        <Heroi nome="Hulk"/>
        <Heroi nome= 'Capitao America'/>
      </Grupo>

      <hr/>

      <Disciplina titulo='Desenvolvimento de Software para Web'>
        <Estudante nome='Ed' curso='ES' universidade='UFC'/>
        <br/>
        <Estudante nome='Bill' curso='EC' universidade='UFC'/>
        <br/>
        <Estudante nome='Tião' curso='CC' universidade='UFC'/>
        <br/>
        <Estudante nome='Zé' curso='DD' universidade='UFC'/>
      </Disciplina>

      <hr/>

      <Pai></Pai>

      <hr/>

      <Contador/>

      <hr/>

      <VotaCidades/>

    </div>
  );
}

export default App;
