import './Principal.css';
import {useState} from 'react';
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
              Bienvenido a MeMudo! Aquí usted podrá contratar y también ofrecer servicios para el transporte en las mudanzas. Ingrese ya sea como cliente u oferente y disfrute de la experiencia.  
            </div>
          </section>
          <div className="app-botones">
            <div style={{minWidth:"50%"}}>
              <button type="button" class="btn btn-lg btn-block w-100" style={{backgroundColor:"#5C5C5C", color:"#EEEEEE"}} onClick={() => setButtonPopupIniciarSesion(true)}>Iniciar sesion</button>
            </div>
            <div style={{minWidth:"50%"}}>
              <button type="button" class="btn btn-lg btn-block w-100" style={{backgroundColor:"#5C5C5C", color:"#EEEEEE"}} onClick={() => setButtonPopupRegistrarse(true)}>Registrarse</button>
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