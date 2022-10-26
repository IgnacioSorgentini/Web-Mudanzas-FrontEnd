import './App.css';
import HomeCliente from './pages/HomeCliente/HomeCliente';
import Principal from './pages/Principal/Principal';
import Compartir from './pages/Compartir/Compartir';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import InfoEmpresa from './pages/InfoEmpresa/InfoEmpresa';


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Log</Link>
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Share">Share</Link>
            </li>
            <li>
              <Link to="/Empresa">Empresa</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Principal/>} ></Route>
          <Route path="/Home" element={<HomeCliente/>} ></Route>
          <Route path="/Share" element={<Compartir/>} ></Route>
          <Route path="/Empresa" element={<InfoEmpresa/>} ></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}
