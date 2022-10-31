import React from "react";
import './Empresa.css';
import Rating from '@mui/material/Rating';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Empresa({nombre, puntuacion, ubicacion}){
    return(
        <div className="contenedor-empresa">
            <div className="contenedor-imagen">

            </div>
            <div className="contenedor-nombre">
                <p>{nombre}</p>
            </div>
            <div className="contenedor-puntuacion">
                <Rating name="read-only" value={puntuacion}  readOnly/>
            </div>
            <div className="contenedor-ubicacion">
                <p><LocationOnIcon></LocationOnIcon>{ubicacion}</p>
            </div>
        </div>
    )
}

export default Empresa;