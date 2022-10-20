import React from "react";
import {useState, useEffect} from 'react';
import './InicioSesion.css';

function InicioSesion(props){
    
    const [validar, setValidar] = useState(-1);
    const [user, setUser] = useState('');   
    const [password,setPassword] = useState('')
    const [error,setError] = useState(1)


    const userValido='pedroseveri@gmail.com'
    const pwValida= '123'
    
    const handleUserChange = (e) => {
    	setUser(e.target.value);
  	};
  
	const handlePasswordChange = (e) => {
    	setPassword(e.target.value);
  	};

    function comprobarUsuario () {
        if (userValido === user && pwValida === password ){
            setValidar(0)
        }
        else{
            setError(0)
        }
    }

    const comprobarUsuarioConEnter = (e) => {
        if (e.key == 'Enter') {
            comprobarUsuario()
          }
    }
    
    if(validar == -1){
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="caja-titulo">
                    <h2 className="title"> Inicio de sesión </h2>
                </div>
                <div className="caja-contenido">
                    <text className="texto"> Ingrese su mail: </text>
                    <br/>
                    <input className="input" type ="text" placeholder="Mail" onChange={handleUserChange}/>
                    <br/>
                    <br/>
                    <text className="texto">Ingrese su contraseña:</text>
                    <br/>
                    <input className="input" type ="password" placeholder="Contraseña" onChange={handlePasswordChange} onKeyDown={comprobarUsuarioConEnter}/>
                    <a  className="vinculo" href="#">¿Olvidaste tu contraseña?</a> 
                    <br/>
                    {error == 0 && <div className="contenedorError"><text className="error">Los datos ingresados no son correctos</text></div>}
                    <br/>
                    <div className="caja-botones">
                        <button className="boton btn btn-warning btn-lg" onClick={comprobarUsuario}>
                            INGRESAR
                        </button>
                        <button className="boton btn btn-warning btn-lg" onClick={() => props.setTrigger(false)}>
                            CANCELAR
                        </button>
                    </div> 
                </div>

            </div>
        </div>
    ) : "";
    }
}

export default InicioSesion;