import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Rating from '@mui/material/Rating';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import Empresa from '../../components/Empresa/Empresa';
import { Link } from 'react-router-dom';

export default function Home(){
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    }

    return(
        <div style={{display:"flex", backgroundColor:"#D9D9D9",flex:1,flexDirection:"column"}}>
          <div style={{display:"flex",backgroundColor:"#734E38",height:"10vh",flexDirection:"row",justifyContent:"space-around" , borderRadius:"5px",margin:"20px",alignItems:"center"}}>
            <a style={{fontWeight: "bold",color:"#F28D52",fontSize:50}}>MeMudo!</a>
            <Box  style={{display:"flex",backgroundColor:"#F2DC9B",width : 250,height: 40,borderRadius:"50px",alignItems:"center",flexDirection:"row", }}>
            <SearchIcon />
            <Input placeholder="Buscar Empresa" />
            </Box>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                
              >
                <AccountCircle />
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
        <div style={{display:"flex", backgroundColor:"#D9D9D9",flex:9,flexDirection:"row", borderRadius:"5px",margin:"20px",justifyContent:"space-around" }}>
          <div>
            <FormControl style={{backgroundColor:"#F2DC9B"}} sx={ { m: 1, minWidth: 200 }}>
                <InputLabel  id="demo-simple-select-label">Calificacion</InputLabel>
                <Select >
                  <div style={{display:"flex",flex:1,flexDirection:"column",justifyContent:"space-around" ,alignItems:"center"}}>
                    <Rating name="read-only" value={1}  readOnly/>
                    <Rating name="read-only" value={2} readOnly />
                    <Rating name="read-only" value={3} readOnly />
                    <Rating name="read-only" value={4}  readOnly/>
                    <Rating name="read-only" value={5}  readOnly/>
                    </div>
                </Select>
            </FormControl></div>
            <div>
            <FormControl style={{backgroundColor:"#F2DC9B"}} sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Zona</InputLabel>
                <Select
                >
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                    <MenuItem value={30}>3</MenuItem>
                </Select>
            </FormControl></div>
            <div>
            <FormControl style={{backgroundColor:"#F2DC9B"}} sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Precios</InputLabel>
                <Select>
                
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                    <MenuItem value={30}>3</MenuItem>
                  
                </Select>
            </FormControl></div>
            <div>
            <FormControl style={{backgroundColor:"#F2DC9B"}} sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Servicios</InputLabel>
                <Select>
                  <div style={{display:"flex",flex:1,flexDirection:"column",justifyContent:"space-around" ,alignItems:"center"}}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Transporte" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Descenso de pertenencias" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Embalaje" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Guardado de pertenencias" />
                  </FormGroup>
                  </div>
                </Select>
            </FormControl></div>
            </div>
            <div className="contenedor-empresas" style={{display:"flex", flexDirection:"row", flexWrap: "wrap", justifyContent: "center"}}>
              <Link to="/Empresa"><Empresa /></Link>
              <Empresa />
              <Empresa />
              <Empresa />
              <Empresa />
              <Empresa />
              <Empresa />
            </div>
            </div>
    );
}