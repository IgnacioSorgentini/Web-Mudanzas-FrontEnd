import React from "react";
import '../../Fuentes.css';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';
import './Registro.css';

function Registro(props) {
    
    const [validar, setValidar] = useState(-1);
    const [reingresopass, setReingresoPass] = useState('');   
    const [mail,setMail] = useState('')
    const [password,setPassword] = useState(' ')
    const [error,setError] = useState(1)
    const [rol,setRol] = useState(-1)  //1 para cliente y 0 para oferente
    const [pregunta, setPregunta] = useState('');   
    const [respuestaPregunta,setRespuestaPregunta] = useState('')


    const [texto,setTexto] = useState('Perfil')
    const [texto2,setTexto2] = useState('Pregunta')
    const usuarios =['pedroseveri@gmail.com','ignacio@gmail.com','mirko@gmail.com']
    
    const handleReingresoChange = (e) => {
    	setReingresoPass(e.target.value);
  	};
  
	const handlePasswordChange = (e) => {
    	setPassword(e.target.value);
  	};
    
    const handleMailChange = (e) => {
    	setMail(e.target.value);
  	};

    const handlePreguntaChange = (e) =>{
        setPregunta(e)
    }
    
    const handleRespuestaPreguntaChange = (e) =>{
        setRespuestaPregunta(e.target.value)
    }

    function setCliente() {
        setRol(1)
        setTexto('Cliente')
    };
    function setOferente() {
        setRol(0)
        setTexto('Oferente')
    };
    function setPregunta1(){
        setTexto2('¿Como se llamaba/llama su primer mascota?')
        handlePreguntaChange('¿Como se llamaba/llama su primer mascota?')
    }
    function setPregunta2(){
        setTexto2('¿Como se llama la calle donde viviste por primera vez?')
        handlePreguntaChange('¿Como se llama la calle donde viviste por primera vez?')
    }
    
    function verificaciones (){
        comprobarPassword()
        comprobarMail()
    }

    function comprobarPassword () {
        if (password === ' ' || reingresopass === ' '){
            setError(4)
        }
        else if (reingresopass === password){
            setValidar(0)
        }
        else{
            setError(0)
        }
    }
    function comprobarMail () {
            if (usuarios.indexOf(mail) != -1 ){
                setError(2)
            }
            else if (mail === ' ' || mail.includes('@') === false){
                setError(3)
            }
    }
    
    
    
    if (validar == -1){
        return(props.trigger) ? (
            <div className="popup">
                <div className="popup-inner">
                    <div className="formRegistro">
                        <div className="titulo-regitro">
                            <h2 className="titleRegistro"> ¡Create una cuenta! </h2>
                        </div>
                        <div className="contenido-registro">
                        <h5 className="texto">Seleccioná tu perfil:</h5>
                            <Dropdown className="drop">
                                <Dropdown.Toggle className="toggle" id="dropdown-basic" style={{backgroundColor:"#F7D794"}} >
                                    {texto}
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="item" style={{backgroundColor:"#F7D794"}}>
                                    <Dropdown.Item href="#/profesor" onClick={setOferente}>Oferente</Dropdown.Item>
                                    <Dropdown.Item href="#/alumno" onClick={setCliente}>Cliente</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <br/>
                            {rol == 0 && 
                                <div>
                                    <TextField id="outlined-basic" label="Nombre de la empresa" variant="outlined" margin="normal" fullWidth />
                                    <TextField id="outlined-basic" label="Mail personal o de la empresa" variant="outlined" onChange={handleMailChange} margin="normal" fullWidth />
                                    {error == 2 && <Alert variant="filled" severity="error"><h6>El mail indicado ya se encuentra registrado</h6></Alert>}
                                    {error == 3 && <Alert variant="filled" severity="error"><h6>El mail indicado no esta en el formato correcto o se encuentra vacio</h6></Alert>}
                                    <TextField label="Numero de telefono" id="outlined-start-adornment" sx={{ m: 1, width: '25ch' }} InputProps={{startAdornment: <InputAdornment position="start">+54 9</InputAdornment>,}} margin="normal" fullWidth />
                                    <TextField id="outlined-password-input" label="Contraseña" type="password" autoComplete="current-password" onChange={handlePasswordChange} margin="normal" fullWidth />
                                    <TextField id="outlined-password-input" label="Confirme su contraseña" type="password" autoComplete="current-password" onChange={handleReingresoChange} margin="normal" fullWidth />
                                    {error == 0 && <Alert variant="filled" severity="error"><h6>Las contraseñas no coinciden</h6></Alert>}
                                    {error == 4 && <Alert variant="filled" severity="error"><h6>La contraseña esta vacia</h6></Alert>}
                                    <h5 className="texto"> Indique la pregunta secreta y su respuesta: </h5>
                                    <Dropdown className="drop">
                                        <Dropdown.Toggle className="toggle" id="dropdown-basic" style={{backgroundColor:"#F7D794"}} >
                                            {texto2}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="item" style={{backgroundColor:"#F7D794"}}>
                                            <Dropdown.Item href="#/action-1" onClick={setPregunta1} onChange={handlePreguntaChange} ><h5>¿Como se llamaba/llama su primer mascota?</h5></Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={setPregunta2} onChange={handlePreguntaChange}><h5>¿Como se llama la calle donde viviste por primera vez?</h5></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <TextField id="outlined-basic" label="Respuesta" variant="outlined" onChange={handleRespuestaPreguntaChange} margin="normal" fullWidth />
                                    <div className="botones-registro">
                                        <button className="botonRegistro btn btn-lg" style={{backgroundColor:"#F7D794", color:"#black"}} onClick={verificaciones} >
                                            <h5>Confirmar</h5>
                                        </button>
                                        <button className="botonRegistro btn btn-lg" style={{backgroundColor:"#F7D794", color:"#black"}} onClick={() => props.setTrigger(false)}>
                                            <h5>Cancelar</h5>
                                        </button>
                                    </div>
                                </div>
                            }
                            {rol == 1 && 
                                <div>
                                    <TextField id="outlined-basic" label="Nombre" variant="outlined" margin="normal" fullWidth />
                                    <TextField id="outlined-basic" label="Apellido" variant="outlined" margin="normal" fullWidth />
                                    <TextField id="outlined-basic" label="Email" variant="outlined" onChange={handleMailChange} margin="normal" fullWidth />
                                    {error == 2 && <Alert variant="filled" severity="error"><h6>El mail indicado ya se encuentra registrado</h6></Alert>}
                                    {error == 3 && <Alert variant="filled" severity="error"><h6>El mail indicado no esta en el formato correcto o se encuentra vacio</h6></Alert>}
                                    <TextField id="outlined-basic" label="Ciudad" variant="outlined" margin="normal" fullWidth />    
                                    <TextField id="outlined-basic" label="Codigo postal" variant="outlined" margin="normal" fullWidth />
                                    <TextField id="outlined-basic" label="Calle" variant="outlined" margin="normal" fullWidth />
                                    <TextField id="outlined-basic" label="Numero de calle" variant="outlined" margin="normal" fullWidth />
                                    <TextField id="outlined-password-input" label="Contraseña" type="password" autoComplete="current-password" onChange={handlePasswordChange} margin="normal" fullWidth />
                                    <TextField id="outlined-password-input" label="Confirme su contraseña" type="password" autoComplete="current-password" onChange={handleReingresoChange} margin="normal" fullWidth />
                                    {error == 0 && <Alert variant="filled" severity="error"><h6>Las constraseñas no coinciden</h6></Alert>}
                                    {error == 4 && <Alert variant="filled" severity="error"><h6>La contraseña esta vacia</h6></Alert>}
                                    <h6 className="texto"> Indique la pregunta secreta y su respuesta: </h6>
                                    <Dropdown className="drop">
                                        <Dropdown.Toggle className="toggle" id="dropdown-basic" style={{backgroundColor:"#F7D794"}} >
                                            {texto2}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="item" style={{backgroundColor:"#F7D794"}}>
                                            <Dropdown.Item href="#/action-1" onClick={setPregunta1} onChange={handlePreguntaChange} ><h6>¿Como se llamaba/llama su primer mascota?</h6></Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={setPregunta2} onChange={handlePreguntaChange}><h6>¿Como se llama la calle donde viviste por primera vez?</h6></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <TextField id="outlined-basic" label="Respuesta" variant="outlined" onChange={handleRespuestaPreguntaChange} margin="normal" fullWidth />
                                    <div className="botones-registro">
                                        <button className="botonRegistro btn btn-lg" style={{backgroundColor:"#F7D794", color:"black"}} onClick={verificaciones} >
                                            <h5>Confirmar</h5>
                                        </button>
                                        <button className="botonRegistro btn btn-lg" style={{backgroundColor:"#F7D794", color:"black"}} onClick={() => props.setTrigger(false)}>
                                            <h5>Cancelar</h5>
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        ) : "";
    }
    
}

export default Registro;