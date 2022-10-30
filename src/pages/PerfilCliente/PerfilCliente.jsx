import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import CreateIcon from '@mui/icons-material/Create';
import MenuCliente from '../../components/Menu/MenuCliente';

//import LocationOnIcon from '@mui/icons-material/LocationOn';
//import ShareIcon from '@mui/icons-material/Share';

//import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './PerfilCliente.css';

export default function Share(){
    return(
        <div class="fondo-perfil">

          <MenuCliente />
          <div class="contenedor-perfil">
                <div class="contenedor-info-perfil">
                    <div class="contenedor-editar-general">
                        <div class="contenedor-editar" >
                            <div class="contenedor-icon">
                                <AccountCircleIcon style={{color:"#F2DC9B",fontSize:290}}></AccountCircleIcon>
                            </div>
                            <h2>James Rodriguez <CreateIcon style={{fontSize:30}}></CreateIcon></h2>
                            <h3>JRodriguez@gmail.com</h3>
                        </div> 
                    </div>

                    <div class="contenedor-mudanzas">
                        <h1>Mis Mudanzas</h1>
                        <h2>Grupo Atlas <Rating ></Rating></h2>
                        <h3>Mauricio Mudanzas <Rating ></Rating></h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* <div style={{display:"flex",flex:9,flexDirection:"column",alignItems:"center"}}>
            <div style={{display:"flex",flexDirection:"row",margin:"20px",width:"90vw"}}>
                <div style={{display:"flex",flex:1,margin:"20px",flexDirection:"column",alignItems:"center", }}>
                    <div style={{display:"flex",flex:1,flexDirection:"column",justifyContent:"flex-start" }}>
                        <img style={{borderRadius:"5px"}}
                        src="https://muchosnegociosrentables.com/wp-content/uploads/2020/09/como-crear-una-empresa-de-mudanzas.jpg" width={350} height={350}
                        />
                        
                        <div style={{fontSize:50}}>Nombre empresa</div>
                        
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <Rating style={{fontSize:50}}/>
                        </div>
                    </div>
                </div>

                <div style={{display:"flex",borderRadius:"5px",backgroundColor:"#A6836F",flexDirection:"row",margin:"20px",alignItems:"flex-start",height:"80vh",width:"80vh", justifyContent:"space-between",}}>
                  <Rating/>
                    
                </div>

            </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",flexWrap:"wrap",width:"67vw",alignItems:"center"}}>
                <div style={{display:"flex",backgroundColor:"#F2DC9B",width:600,height:250,borderRadius:"5px",margin:"20px",flexDirection:"row",justifyContent:"space-between",}} >
                <AccountCircleIcon style={{color:"red",fontSize:50}}></AccountCircleIcon>
                <Rating/>
                </div>
            </div>

</div> */


