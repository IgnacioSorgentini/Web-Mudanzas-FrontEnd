import React from "react";
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './MenuCliente.css';

function MenuCliente() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    }

    return(
        <div className="menu">
            <div style={{display:"flex",backgroundColor:"#734E38",height:"10vh",flexDirection:"row",justifyContent:"space-between" , borderRadius:"0px", marginTop:"0px", marginLeft:"0px", marginRight:"0px",alignItems:"center", paddingLeft:"10px", paddingRight:"10px"}}>
              <Link to="/HomeCliente" style={{textDecoration:"none"}}>
                {/* <h1 style={{fontWeight: "bold",color:"#F28D52",fontSize:50}}>MeMudo!</h1> */}
                <img src={require('../Menu/MeMudo.png')} style={{height:"10vh", marginTop:"2px", marginLeft:"10px",}} alt='logo'/>
              </Link>
            <div>
              {/* <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                >
                <AccountCircle style={{color:'#F2DC9B', fontSize:'40px'}}/>
              </IconButton> */}
              <IconButton onClick={handleMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/Menu/2.jpg" style={{color:'#734E38',backgroundColor:"#F2DC9B",fontSize:'30px'}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to="/PerfilCliente" style={{textDecoration:'none', color:'black'}}>Mi perfil</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/" style={{textDecoration:'none', color:'black'}}>Cerrar sesion</Link></MenuItem>
              </Menu>
            </div>
          </div>
        </div>
    )
}

export default MenuCliente;