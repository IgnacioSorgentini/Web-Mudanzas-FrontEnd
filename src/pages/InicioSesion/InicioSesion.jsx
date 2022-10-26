import React from "react";
import {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import './InicioSesion.css';
import RecuperacionContraseña from "../RecuperacionContraseña/RecuperacionContraseña";

function InicioSesion(props){
    
    const [buttonPopupRecuperarContraseña, setButtonPopupRecuperarContraseña] = useState(false);

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
                    <TextField id="outlined-basic" label="Mail" variant="outlined" margin="normal" onChange={handleUserChange} fullWidth />
                    <TextField id="outlined-password-input" label="Contraseña" type="password" autoComplete="current-password" margin="normal" onChange={handlePasswordChange} onKeyDown={comprobarUsuarioConEnter} fullWidth />
                    <a  className="vinculo" href="#" onClick={() => setButtonPopupRecuperarContraseña(true)}>¿Olvidaste tu contraseña?</a> 
                    <br/>
                    {error == 0 && <div className="contenedorError"><text className="error">Los datos ingresados no son correctos</text></div>}
                    <br/>
                    <div className="caja-botones">
                        <button className="boton btn btn-warning btn-lg" onClick={comprobarUsuario}>
                            Ingresar
                        </button>
                        <button className="boton btn btn-warning btn-lg" onClick={() => props.setTrigger(false)}>
                            Cancelar
                        </button>
                    </div> 
                </div>
                <RecuperacionContraseña trigger={buttonPopupRecuperarContraseña} setTrigger={setButtonPopupRecuperarContraseña}></RecuperacionContraseña>
            </div>
        </div>
    ) : "";
    }
}

export default InicioSesion;