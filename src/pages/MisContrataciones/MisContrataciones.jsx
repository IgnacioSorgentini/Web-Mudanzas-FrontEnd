import React from "react";
import './MisContrataciones.css';
import MenuOferente from '../../components/Menu/MenuOferente';
import Contratacion from "../../components/Contratacion/Contratacion";

function MisContrataciones(){
    return(
        <div className="MisContrataciones">
            <MenuOferente />
            <div className="contenedor-contrataciones">
                <div className="en-proceso">
                    <div className="titulo">
                        <h3>Mudanzas en proceso</h3>
                    </div>
                    <div className="lista-mudanzas">
                        <Contratacion cliente="Juan Perez" fecha="21/07/2022" />
                        <Contratacion cliente="Jorge Carrascal" fecha="06/03/2022" />
                        <Contratacion cliente="Juan Fernando Quintero" fecha="13/05/2022" />
                        <Contratacion cliente="Damian Kuc" fecha="30/04/2022" />
                    </div>
                </div>
                <div className="completadas">
                    <div className="titulo">
                        <h3>Mudanzas completadas</h3>
                    </div>
                    <div className="lista-mudanzas">
                    <Contratacion cliente="Armando Casas" fecha="15/09/2021"/>
                    <Contratacion cliente="Gustavo Reyes" fecha="09/07/2021"/>
                    <Contratacion cliente="Esteban Quito Armado" fecha="23/01/2021"/>
                    <Contratacion cliente="Jimena Baron" fecha="03/03/2022"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MisContrataciones;
