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
              <h1>MeMudo!</h1>
            </div>
            <div className="app-descripcion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </div>
          </section>
          <div className="app-botones">
            <button type="button" class="btn btn-lg btn-warning" onClick={() => setButtonPopupIniciarSesion(true)}>Iniciar sesion</button>
            <button type="button" class="btn btn-lg btn-warning" onClick={() => setButtonPopupRegistrarse(true)}>Registrarse</button>
          </div>
      </div>
      </div>
      <InicioSesion trigger={buttonPopupIniciarSesion} setTrigger={setButtonPopupIniciarSesion}></InicioSesion>
      <Registro trigger={buttonPopupRegistrarse} setTrigger={setButtonPopupRegistrarse}></Registro>
    </div>
  );
}

export default App;