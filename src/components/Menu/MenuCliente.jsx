import React from "react";
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
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
            <div style={{display:"flex",backgroundColor:"#734E38",height:"10vh",flexDirection:"row",justifyContent:"space-around" , borderRadius:"5px",margin:"20px",alignItems:"center"}}>
            <a style={{fontWeight: "bold",color:"#F28D52",fontSize:50}}>MeMudo!</a>
            <Box  style={{display:"flex",backgroundColor:"#F2DC9B",width : 250,height: 40,borderRadius:"50px",alignItems:"center",flexDirection:"row", }}>
            <SearchIcon />
            <Input placeholder="Buscar Empresa" />
            </Box>
            <div>
                <Link to="/home">
                <IconButton size="small" color="inherit">
                    <LocalShippingIcon />Contratar empresa
                </IconButton>
                </Link>
            </div>
            <div>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                
              >
                <AccountCircle />Perfil
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
                <MenuItem onClick={handleClose}>Mi perfil</MenuItem>
                <MenuItem onClick={handleClose}><Link to="/">Cerrar sesion</Link></MenuItem>
              </Menu>
            </div>
          </div>
        </div>
    )
}

export default MenuCliente;