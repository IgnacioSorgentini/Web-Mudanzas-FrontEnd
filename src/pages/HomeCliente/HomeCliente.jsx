import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import Rating from '@mui/material/Rating';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Empresa from '../../components/Empresa/Empresa';
import { Link } from 'react-router-dom';
import MenuCliente from '../../components/Menu/MenuCliente';
import { BorderColor, BorderStyle } from '@mui/icons-material';

export default function Home(){
    return(
        <div style={{display:"flex", backgroundColor:"#D9D9D9",flex:1,flexDirection:"column"}}>
          <MenuCliente />
          <div style={{display:"flex", backgroundColor:"#A6836F",flex:9,flexDirection:"row", borderRadius:"0px 0px 5px 5px",marginLeft:"20px", marginRight:"20px", paddingTop:"10px", paddingLeft:"10px", alignItems:'center' }}>
          <Box  style={{display:"flex", backgroundColor:"#F2DC9B", width:250, height:40, borderRadius:"50px", alignItems:"center", flexDirection:"row", paddingLeft:"5px" }}>
            <SearchIcon />
            <Input placeholder="Buscar Empresa" />
          </Box>
            <div style={{display:'flex'}}>
              <FormControl style={{backgroundColor:"#F2DC9B", borderRadius:"50px"}} sx={ { m: 1, minWidth: 200 }} size="small">
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
              </FormControl>
            </div>
            <div>
              <FormControl style={{backgroundColor:"#F2DC9B", borderRadius:"50px"}} sx={{ m: 1, minWidth: 200 }} size="small">
                  <InputLabel id="demo-simple-select-label">Zona</InputLabel>
                  <Select
                  >
                      <MenuItem value={10}>1</MenuItem>
                      <MenuItem value={20}>2</MenuItem>
                      <MenuItem value={30}>3</MenuItem>
                  </Select>
              </FormControl>
            </div>
          <div>
            <FormControl style={{backgroundColor:"#F2DC9B", borderRadius:"50px"}} sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel id="demo-simple-select-label">Precios</InputLabel>
                <Select>
                
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                    <MenuItem value={30}>3</MenuItem>
                  
                </Select>
            </FormControl>
            </div>
            <div>
            <FormControl style={{backgroundColor:"#F2DC9B", borderRadius:"50px"}} sx={{ m: 1, minWidth: 200 }} size="small">
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
            <div className="contenedor-empresas" style={{display:"flex", flexDirection:"row", flexWrap: "wrap", justifyContent: "start"}}>
              <Link to="/Empresa" style={{textDecoration:'none'}}><Empresa nombre="Gabriel Mudanzas" puntuacion={3} ubicacion="Palermo, CABA" /></Link>
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