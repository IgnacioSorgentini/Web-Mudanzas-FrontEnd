import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import Rating from '@mui/material/Rating';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';

export default function Empresa(){
    
    return(
        <div style={{display:"flex", backgroundColor:"#D9D9D9",flex:1,flexDirection:"column"}}>
          <div style={{display:"flex",backgroundColor:"#734E38",flexDirection:"row",justifyContent:"space-around" , borderRadius:"5px",margin:"20px",alignItems:"center",height:"10vh"}}>
            <a style={{fontWeight: "bold",color:"#F28D52",fontSize:50}}>MeMudo!</a>
            <Box  style={{display:"flex",backgroundColor:"#F2DC9B",width : 250,height: 40,borderRadius:"50px",alignItems:"center",flexDirection:"row", }}>
            <SearchIcon />
            <Input placeholder="Buscar Empresa" />
            </Box>
            <AccountCircleIcon style={{color:"#F2DC9B",fontSize:50}}></AccountCircleIcon>
          </div>

        <div style={{display:"flex",flex:9,flexDirection:"column",alignItems:"center"}}>
            <div style={{display:"flex",flexDirection:"row",margin:"20px",width:"90vw"}}>
                <div style={{display:"flex",flex:1,margin:"20px",flexDirection:"column",alignItems:"center", }}>
                    <div style={{display:"flex",flex:1,flexDirection:"column",justifyContent:"flex-start" }}>
                        <img style={{borderRadius:"5px"}}
                        src="https://muchosnegociosrentables.com/wp-content/uploads/2020/09/como-crear-una-empresa-de-mudanzas.jpg" width={350} height={350}
                        />
                        <div style={{alignItems:"center"}}>
                            <LocationOnIcon/>
                            Localidad
                        </div>
                        <div style={{fontSize:50}}>Nombre empresa</div>
                        
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <Rating style={{fontSize:50}}/>
                            <Link to="/Share"><ShareIcon style={{fontSize:50, textDecoration:"none", color:"black"}}/></Link>
                        </div>
                    </div>
                </div>

                <div style={{display:"flex",borderRadius:"5px",backgroundColor:"#A6836F",flexDirection:"column",margin:"20px",alignItems:"flex-start",height:"80vh",width:"80vh"}}>
                    <div style={{display:"flex",flex:7,flexDirection:"row",alignItems:"center",alignItems:"flex-start",margin:"20px"}}>
                        <CheckCircleIcon style={{color:"#F2DC9B",fontSize:40}}></CheckCircleIcon> <div style={{color:"white",fontSize:30}}>Caracteristicas</div>
                    </div>
                    <div style={{display:"flex",flex:2,margin:"20px",borderRadius:"5px",backgroundColor:"#F28D52",width:250,height:50,alignItems:"center",justifyContent:"center",fontSize:50}}>Contratar</div>
                </div>

            </div>

            <div style={{display:"flex",margin:"20px",backgroundColor:"#A6836F",justifyContent:"center",alignItems:"center",width:"90vw",height:150,borderRadius:"5px",color:"white",fontSize:40}} >
                Descripcion de la empresa
            </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",flexWrap:"wrap",width:"67vw",alignItems:"center"}}>
                <div style={{display:"flex",backgroundColor:"#F2DC9B",width:600,height:250,borderRadius:"5px",margin:"20px",flexDirection:"row",justifyContent:"space-between",}} >
                <AccountCircleIcon style={{color:"red",fontSize:50}}></AccountCircleIcon>
                <Rating/>
                </div>
                <div style={{display:"flex",backgroundColor:"#F2DC9B",width:600,height:250,borderRadius:"5px",margin:"20px",flexDirection:"row",justifyContent:"space-between",}} >
                <AccountCircleIcon style={{color:"red",fontSize:50}}></AccountCircleIcon>
                <Rating/>
                </div>
                <div style={{display:"flex",backgroundColor:"#F2DC9B",width:600,height:250,borderRadius:"5px",margin:"20px",flexDirection:"row",justifyContent:"space-between",}} >
                <AccountCircleIcon style={{color:"red",fontSize:50}}></AccountCircleIcon>
                <Rating/>
                </div>
                <div style={{display:"flex",backgroundColor:"#F2DC9B",width:600,height:250,borderRadius:"5px",margin:"20px",flexDirection:"row",justifyContent:"space-between",}} >
                <AccountCircleIcon style={{color:"red",fontSize:50}}></AccountCircleIcon>
                <Rating/>
                </div>
            </div>
            <div style={{display:"flex",backgroundColor:"#A6836F",margin:"20px",width:"90vw",height:150,borderRadius:"5px",color:"white",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",}} >
                <div><PhoneIcon/>Telefono</div>
                <div><HomeIcon/>Direccion</div>
                <div><MailIcon/>Mail</div>
            </div>

        </div>
        </div>
            
    );
}