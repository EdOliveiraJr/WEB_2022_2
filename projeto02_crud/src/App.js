// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import home from "bootstrap-icons/icons/house.svg"

import CreateStudent from "./Components/Students/CreateStudent";
import EditStudent from "./Components/Students/EditStudent";
import ListStudent from "./Components/Students/ListStudent";
import Home from "./Components/Home";
import CreateTeatcher from "./Components/Teatcher/CreateTeatcher";
import EditTeatcher from "./Components/Teatcher/EditTeatcher";
import ListTeatcher from "./Components/Teatcher/ListTeatcher";
import {Routes, Route, Link} from 'react-router-dom' 
import SignInUserPage from "./Components/Users/SignInUser";
import SignUpUserPage from "./Components/Users/SignUpUser";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        
        <Link to={'/'} className="navbar-brand" style={{paddingLeft:10}}> 
          <img src={home} width="32"></img>
        </Link>
      
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <div className="dropdown m-1">
              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Estudante
              </a>

              <ul className="dropdown-menu">
                
                <li className="nav-item">
                  {/* <a class="nav-link" href="createStudent">Criar Estudante</a> */}
                  <Link to='/createStudent' className='nav-link'>Criar Estudante</Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="listStudent">Listar Estudante</a> */}
                  <Link to='/listStudent' className='nav-link'>Listar Estudante</Link>
                </li>
              </ul>
            </div>
            <div className="dropdown m-1">
              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Professor
              </a>  

              <ul className="dropdown-menu">
                
                <li className="nav-item">
                  {/* <a class="nav-link" href="createStudent">Criar Estudante</a> */}
                  <Link to='/createTeatcher' className='nav-link'>Criar Professor</Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="editTeatcher">Editar Professor</a> */}
                  <Link to='/listTeatcher' className='nav-link'>Listar Professor</Link>
                </li>
              </ul>
            </div>
            

          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<SignUpUserPage/>}/>
        <Route path="createStudent" element={<CreateStudent/>}/>
        <Route path="listStudent" element={<ListStudent/>}/>
        <Route path="editStudent/:id" element={<EditStudent/>}/>
        <Route path="createTeatcher" element={<CreateTeatcher/>}/>
        <Route path="listTeatcher" element={<ListTeatcher/>}/>
        <Route path="editTeatcher/:id" element={<EditTeatcher/>}/>
        <Route path="login" element={<SignInUserPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
