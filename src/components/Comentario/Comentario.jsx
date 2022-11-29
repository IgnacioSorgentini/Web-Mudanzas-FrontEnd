import React from "react";
import '../../Fuentes.css';
import './Comentario.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';

function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }


function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  

function Comentario({usuario, texto, puntuacion}){
    return(
        <div style={{display:"flex",backgroundColor:"#8D8D9B",width:590,height:200,borderRadius:"10px",marginTop:"20px", marginBottom:"20px", padding:"20px", flexDirection:"column",justifyContent:"start", boxSizing:"border-box"}} >
           <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <div style={{display:"flex", flexDirection:"row", marginBottom:"20px"}}>
                    <div>
                        <Avatar {...stringAvatar(`${usuario}`)} />
                    </div>
                    <div style={{display:"flex", boxSizing:"border-box", paddingTop:"5px", marginLeft:"10px"}}>
                        <h5 style={{color:"white"}}>{usuario}</h5>
                    </div>
                </div>
                <div>
                        <Rating name="read-only" value={puntuacion} readOnly style={{color:"#D9D9D9"}} />
                </div>
           </div>
            <div>
                <h6 style={{color:"white"}}>{texto}</h6>
            </div>
        </div>
    )
}

export default Comentario;