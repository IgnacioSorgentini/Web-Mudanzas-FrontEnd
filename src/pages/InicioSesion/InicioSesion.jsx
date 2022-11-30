import React from "react";
import '../../Fuentes.css';
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

    function comprobarUsuario () {
        fetch("https://69a4-186-122-60-88.sa.ngrok.io/me-mudo-back/v1/login/authenticate", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify({email: user, password: password})
          }).then(result=> { return result.json()})
          .then(data=> {if(data.code==200){
            console.log(data.code)
            window.pantalla = data.sessionEnc;
            console.log(window.pantalla)
            setValidar(0)
           
          }else{
            setError(0)
          }})
    }
    
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
                    <h2 className="titulo-inicio-sesion"> Inicio de sesión </h2>
                </div>
                <div className="caja-contenido">
                    <TextField id="outlined-basic" label="Mail" variant="outlined" margin="normal" onChange={handleUserChange} fullWidth />
                    <TextField id="outlined-password-input" label="Contraseña" type="password" autoComplete="current-password" margin="normal" onChange={handlePasswordChange} onKeyDown={comprobarUsuarioConEnter} fullWidth />
                    <a  className="vinculo" href="#" onClick={() => setButtonPopupRecuperarContraseña(true)}><h6>¿Olvidaste tu contraseña?</h6></a> 
                    <br/>
                    {error == 0 && <Alert variant="filled" severity="error"><h6>Los datos ingresados no son correctos</h6></Alert>}
                    <br/>
                    <div className="caja-botones">

                        <button className="boton btn btn-lg" style={{backgroundColor:"#F7D794", color:"black"}} onClick={comprobarUsuario}>
                            <h5>Ingresar</h5>
                        </button>
                        <button className="boton btn btn-lg" style={{backgroundColor:"#F7D794", color:"black"}} onClick={() => props.setTrigger(false)}>
                            <h5>Cancelar</h5>
                        </button>
                    </div> 
                </div>
                <RecuperacionContraseña trigger={buttonPopupRecuperarContraseña} setTrigger={setButtonPopupRecuperarContraseña}></RecuperacionContraseña>
            </div>
        </div>
    ) : "";
    }
    else{
        if (true){
            window.location.replace("/HomeCliente")
        }
        else{
            window.location.replace("/HomeOferente")
        }
    }
}

export default InicioSesion;