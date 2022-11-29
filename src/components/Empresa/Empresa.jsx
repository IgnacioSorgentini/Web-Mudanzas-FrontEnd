import React from "react";
import './Empresa.css';
import '../../Fuentes.css';
import Rating from '@mui/material/Rating';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Chip } from "@mui/material";
import BusinessIcon from '@mui/icons-material/Business';

function Empresa({nombre, puntuacion, ubicacion, precioXKm}){
    return(
        <div className="contenedor-empresa">
            <div className="contenedor-imagen">
                <Chip label="Simulador!" color="error" size="small" style={{margin:"5px"}} />
            </div>
            <div className="contenedor-nombre">
            <Chip icon={<BusinessIcon/>} label={<h6>{nombre}</h6>}/>
            </div>
            <div className="contenedor-ubicacion">
                <Chip icon={<LocationOnIcon/>} label={<h6>{ubicacion}</h6>}/>
            </div>
            <div className="contenedor-puntuacion">
                <Rating name="read-only" value={puntuacion} style={{color:"#5C5C5C"}}  readOnly/>
            </div>
        </div>
    )
}

export default Empresa;