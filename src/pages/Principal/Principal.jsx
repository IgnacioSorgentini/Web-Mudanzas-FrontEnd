import './Principal.css';
import {useState} from 'react';
import '../../Fuentes.css';
import InicioSesion from '../InicioSesion/InicioSesion';
import Registro from '../Registro/Registro';
import RecuperacionContraseña from '../RecuperacionContraseña/RecuperacionContraseña';

function App() {

  const [buttonPopupIniciarSesion, setButtonPopupIniciarSesion] = useState(false);
  const [buttonPopupRegistrarse, setButtonPopupRegistrarse] = useState(false);

  

  return (
    <div className="App">
      <div className="contenedor-general">
      <div className="app-izquierda">
        <div className="app-imagen">
          
        </div>
      </div>
      <div className="app-derecha">
          <section class="spikes">
            <div className="app-titulo">
              <h1 style={{color:"#1B2430"}}>MeMudo!</h1>
            </div>
            <div className="app-descripcion" style={{color:"#1B2430"}}>
              <h6>Bienvenido a <b>MeMudo!</b> Aquí usted podrá contratar y también ofrecer servicios para el transporte en las mudanzas. Además, podrá sacar provecho de nuestro <b>simulador de costos</b>. Ingrese ya sea como cliente u oferente y disfrute de la experiencia.</h6>  
            </div>
          </section>
          <div className="app-botones">
            <div style={{minWidth:"50%"}}>
              <button type="button" class="btn btn-lg btn-block w-100" style={{backgroundColor:"#F7D794", color:"black"}} onClick={() => setButtonPopupIniciarSesion(true)}><h5>Iniciar sesion</h5></button>
            </div>
            <div style={{minWidth:"50%"}}>
              <button type="button" class="btn btn-lg btn-block w-100" style={{backgroundColor:"#F7D794", color:"black"}} onClick={() => setButtonPopupRegistrarse(true)}><h5>Registrarse</h5></button>
            </div>
          </div>
      </div>
      </div>
      <InicioSesion trigger={buttonPopupIniciarSesion} setTrigger={setButtonPopupIniciarSesion}></InicioSesion>
      <Registro trigger={buttonPopupRegistrarse} setTrigger={setButtonPopupRegistrarse}></Registro>
    </div>
  );
}

export default App;