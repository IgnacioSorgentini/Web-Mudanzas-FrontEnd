import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';

export default function Share(){
    
    return(
        <div style={{display:"flex",height:"100vh", backgroundColor:"#D9D9D9",flex:1,flexDirection:"column"}}>
          <div style={{display:"flex",backgroundColor:"#734E38",height:"10vh",flexDirection:"row",justifyContent:"space-around" , borderRadius:"5px",margin:"20px",alignItems:"center"}}>
            <a style={{fontWeight: "bold",color:"#F28D52",fontSize:50}}>MeMudo!</a>
            <Box  style={{display:"flex",backgroundColor:"#F2DC9B",width : 250,height: 40,borderRadius:"50px",alignItems:"center",flexDirection:"row", }}>
            <SearchIcon />
            <Input placeholder="Buscar Empresa" />
            </Box>
            <AccountCircleIcon style={{color:"#F2DC9B",fontSize:50}}></AccountCircleIcon>
          </div>
        <div style={{display:"flex", backgroundColor:"#D9D9D9",flex:9,flexDirection:"column", borderRadius:"5px",margin:"20px",alignItems:"center",justifyContent:"space-evenly" }}>
          <div style={{display:"flex",backgroundColor:"#A6836F",width : 700,height: 100,borderRadius:"5px",flexDirection:"row",color:"white",justifyContent:"center",fontSize:30,alignItems:"center" }}>Compartir en Facebook</div>
          <div style={{display:"flex",backgroundColor:"#A6836F",width : 700,height: 100,borderRadius:"5px",flexDirection:"row",color:"white",justifyContent:"center",fontSize:30,alignItems:"center" }}>Compartir en Twitter</div>
          <div style={{display:"flex",backgroundColor:"#A6836F",width : 700,height: 100,borderRadius:"5px",flexDirection:"row",color:"white",justifyContent:"center",fontSize:30,alignItems:"center" }}>Compartir en Instagram</div>
        </div>
        </div>
    );
}