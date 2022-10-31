import './App.css';
import HomeCliente from './pages/HomeCliente/HomeCliente';
import Principal from './pages/Principal/Principal';
import Compartir from './pages/Compartir/Compartir';
import PerfilCliente from './pages/PerfilCliente/PerfilCliente';
import HomeOferente from './pages/HomeOferente/HomeOferente';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import InfoEmpresa from './pages/InfoEmpresa/InfoEmpresa';
import MisContrataciones from './pages/MisContrataciones/MisContrataciones';


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/HomeOferente" style={{textDecoration:'none'}}>Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Principal/>} ></Route>
          <Route path="/HomeCliente" element={<HomeCliente />} ></Route>
          <Route path="/Share" element={<Compartir/>} ></Route>
          <Route path="/Empresa" element={<InfoEmpresa/>} ></Route>
          <Route path="/PerfilCliente" element={<PerfilCliente />} ></Route>
          <Route path="/HomeOferente" element={<HomeOferente />}></Route>
          <Route path="/MisContrataciones" element={<MisContrataciones />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
