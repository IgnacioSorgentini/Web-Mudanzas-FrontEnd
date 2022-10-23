import React from "react";
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
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
                            <h3 className="titleRegistro"> ¡Create una cuenta! </h3>
                        </div>
                        <div className="contenido-registro">
                        <text className="texto">Seleccioná tu perfil:</text>
                            <Dropdown className="drop">
                                <Dropdown.Toggle className="toggle" id="dropdown-basic" >
                                    {texto}
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="item">
                                    <Dropdown.Item href="#/profesor" onClick={setOferente}>Oferente</Dropdown.Item>
                                    <Dropdown.Item href="#/alumno" onClick={setCliente}>Cliente</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <br/>
                            {rol == 0 && 
                                <div>
                                    <input className="input" type ="text" placeholder="Nombre de la empresa"/>
                                    <input className="input" type ="text" placeholder="Email personal o de la empresa" onChange={handleMailChange}/>
                                    {error == 2 && <div className="contenedorErrorRegistro"><text className="errorRegistro">El mail indicado ya se encuentra regsitrado</text></div>}
                                    {error == 3 && <div className="contenedorErrorRegistro"><text className="errorRegistro">El mail indicado no esta en el formato correcto o se encuentra vacio</text></div>}
                                    <input className="input" type ="text" placeholder="Numero de contacto"/>
                                    <input className="input" type ="password" placeholder="Contraseña" onChange={handlePasswordChange}/>
                                    <br/>
                                    <text className="texto">Confirme su contraseña:</text>
                                    <input className="input" type ="password" placeholder="Contraseña" onChange={handleReingresoChange}/>
                                    {error == 0 && <div className="contenedorErrorRegistro"><text className="errorRegistro">Las contraseñas no coinciden</text></div>}
                                    {error == 4 && <div className="contenedorErrorRegistro"><text className="errorRegistro">La contraseña esta vacia</text></div>}
                                    <text className="texto"> Indique la pregunta secreta y su respuesta: </text>
                                    <Dropdown className="drop">
                                        <Dropdown.Toggle className="toggle" id="dropdown-basic" >
                                            {texto2}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="item">
                                            <Dropdown.Item href="#/action-1" onClick={setPregunta1} onChange={handlePreguntaChange} >¿Como se llamaba/llama su primer mascota?</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={setPregunta2} onChange={handlePreguntaChange}>¿Como se llama la calle donde viviste por primera vez?</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <input className="input" type ="text" placeholder="Respuesta" onChange={handleRespuestaPreguntaChange} />
                                    <div className="botones-registro">
                                        <button className="botonRegistro btn btn-lg btn-warning" onClick={verificaciones} >
                                            Confirmar
                                        </button>
                                        <button className="botonRegistro btn btn-lg btn-warning" onClick={() => props.setTrigger(false)}>
                                            Cancelar
                                        </button>
                                    </div>
                                </div>
                            }
                            {rol == 1 && 
                                <div>
                                    <input className="input" type ="text" placeholder="Nombre"/>
                                    <input className="input" type ="text" placeholder="Apellido"/>
                                    <input className="input" type ="text" placeholder="Email" onChange={handleMailChange}/>
                                    {error == 2 && <div className="contenedorErrorRegistro"><text className="errorRegistro">El mail indicado ya se encuentra regsitrado</text></div>}
                                    {error == 3 && <div className="contenedorErrorRegistro"><text className="errorRegistro">El mail indicado no esta en el formato correcto o se encuentra vacio</text></div>}
                                    <input className="input" type ="text" placeholder="País"/>
                                    <input className="input" type ="text" placeholder="Ciudad"/>
                                    <input className="input" type ="text" placeholder="Codigo postal"/>
                                    <input className="input" type ="text" placeholder="Calle"/>
                                    <input className="input" type ="text" placeholder="Numero de calle"/>
                                    <input className="input" type ="password" placeholder="Contraseña" onChange={handlePasswordChange}/>
                                    <text className="texto">Confirme su contraseña:</text>
                                    <input className="input" type ="password" placeholder="Contraseña" onChange={handleReingresoChange}/>
                                    {error == 0 && <div className="contenedorErrorRegistro"><text className="errorRegistro">Las contraseñas no coinciden</text></div>}
                                    {error == 4 && <div className="contenedorErrorRegistro"><text className="errorRegistro">La contraseña esta vacia</text></div>}
                                    <text className="texto"> Indique la pregunta secreta y su respuesta: </text>
                                    <Dropdown className="drop">
                                        <Dropdown.Toggle className="toggle" id="dropdown-basic" >
                                            {texto2}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="item">
                                            <Dropdown.Item href="#/action-1" onClick={setPregunta1} onChange={handlePreguntaChange} >¿Como se llamaba/llama su primer mascota?</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={setPregunta2} onChange={handlePreguntaChange}>¿Como se llama la calle donde viviste por primera vez?</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <input className="input" type ="text" placeholder="Respuesta" onChange={handleRespuestaPreguntaChange} />
                                    <div className="botones-registro">
                                        <button className="botonRegistro btn btn-lg btn-warning" onClick={verificaciones} >
                                            Confirmar
                                        </button>
                                        <button className="botonRegistro btn btn-lg btn-warning" onClick={() => props.setTrigger(false)}>
                                            Cancelar
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