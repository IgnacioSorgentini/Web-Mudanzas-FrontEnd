import React from "react";
import './Empresa.css';
import Rating from '@mui/material/Rating';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Empresa(){
    return(
        <div className="contenedor-empresa">
            <div className="contenedor-imagen">

            </div>
            <div className="contenedor-nombre">
                <p>Nombre empresa</p>
            </div>
            <div className="contenedor-puntuacion">
                <Rating name="read-only" value={4}  readOnly/>
            </div>
            <div className="contenedor-ubicacion">
                <p><LocationOnIcon></LocationOnIcon>Palermo, CABA</p>
            </div>
        </div>
    )
}

export default Empresa;