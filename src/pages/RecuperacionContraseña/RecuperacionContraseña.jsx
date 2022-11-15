import React from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import './RecuperacionContraseña.css';

function RecuperacionContraseña(props){

    const [validar, setValidar] = useState(-1);
    const [respuestaPregunta,setRespuestaPregunta] = useState('')
    const [validarPregunta, setValidarPregunta] = useState(-1);
    const [reingresopass, setReingresoPass] = useState('');   
    const [password,setPassword] = useState(' ')
    const [error,setError] = useState(-1)

    const respuesta = 'colombres'


    const handleReingresoChange = (e) => {
    	setReingresoPass(e.target.value);
  	};
  
	const handlePasswordChange = (e) => {
    	setPassword(e.target.value);
  	};

    const handleRespuestaPreguntaChange = (e) =>{
        setRespuestaPregunta(e.target.value)
    }

    function verificaciones (){
        validarPreguntaSecreta()
        comprobarPassword()
    }

    function  validarPreguntaSecreta(){
        if (respuestaPregunta.toLocaleLowerCase() == respuesta){
            setValidarPregunta(0)
        }
        else{
            setValidarPregunta(1)
        }
    }
    function comprobarPassword () {
        
        if (reingresopass === password){
            setValidar(0)
        }
        else{
            setError(0)
        }
    }

    if (validar == -1){
        return(props.trigger) ? (
            <div className="popup">
                <div className="popup-inner">
                    <h3 className="titleCambioContraseña"> Cambio de contraseña </h3>
                    <TextField id="outlined-basic" label="¿Como se llama la calle donde viviste por primera vez?" variant="outlined" margin="normal" onChange={handleRespuestaPreguntaChange} fullWidth size="small" />
                    {validarPregunta == 1 && <div className="contenedorErrorRegistro"><text className="errorRegistro">La respuesta no es correcta</text></div>}
                    <button className="botonCambioPass btn btn-lg" style={{backgroundColor:"#F7D794", color:"black"}} onClick={verificaciones}>
                        Confirmar
                    </button>
                    
                    {validarPregunta === 0 &&  <div>
                    <TextField id="outlined-password-input" label="Nueva contraseña" type="password" autoComplete="current-password" margin="normal" onChange={handlePasswordChange} fullWidth size="small" />
                    <TextField id="outlined-password-input" label="Confirme contraseña" type="password" autoComplete="current-password" margin="normal" onChange={handleReingresoChange} fullWidth size="small" />
                    </div>}
                    {error == 0 && <div className="contenedorErrorRegistro"><text className="errorRegistro">Las contraseñas no coinciden o esta en blanco</text></div>}
                    <button className="botonCambioPass btn btn-lg" style={{backgroundColor:"#F7D794", color:"black"}} onClick={() => props.setTrigger(false)}>
                        Cancelar
                    </button>                        
                </div>
            </div>
        ) : "";
    }
}

export default RecuperacionContraseña;