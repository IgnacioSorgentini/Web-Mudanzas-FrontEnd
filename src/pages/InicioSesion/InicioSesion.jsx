import React from "react";
import {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import './InicioSesion.css';
import RecuperacionContraseña from "../RecuperacionContraseña/RecuperacionContraseña";

import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
function InicioSesion(props){
    
    const [buttonPopupRecuperarContraseña, setButtonPopupRecuperarContraseña] = useState(false);

    const [validar, setValidar] = useState(-1);
    const [user, setUser] = useState('');   
    const [password,setPassword] = useState('')
    const [error,setError] = useState(1)


    const userValido='usuario@gmail.com'
    const pwValida= '123'

    const userValido2='oferente@gmail.com'
    const pwValida2= '123'
    
    const handleUserChange = (e) => {
    	setUser(e.target.value);
  	};
  
	const handlePasswordChange = (e) => {
    	setPassword(e.target.value);
  	};

    function comprobarUsuario () {
        if ((userValido === user && pwValida === password) || (userValido2 === user && pwValida2 === password) ){
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
                    {error == 0 && <Alert variant="filled" severity="error">Los datos ingresados no son correctos</Alert>}
                    <br/>
                    <div className="caja-botones">

                        <button className="boton btn btn-lg" style={{backgroundColor:"#F7D794", color:"black"}} onClick={comprobarUsuario}>
                            ingresar
                        </button>
                        <button className="boton btn btn-lg" style={{backgroundColor:"#F7D794", color:"black"}} onClick={() => props.setTrigger(false)}>
                            Cancelar
                        </button>
                    </div> 
                </div>
                <RecuperacionContraseña trigger={buttonPopupRecuperarContraseña} setTrigger={setButtonPopupRecuperarContraseña}></RecuperacionContraseña>
            </div>
        </div>
    ) : "";
    }
    else{
        if (user == userValido){
            window.location.replace("/HomeCliente")
        }
        else{
            window.location.replace("/HomeOferente")
        }
    }
}

export default InicioSesion;