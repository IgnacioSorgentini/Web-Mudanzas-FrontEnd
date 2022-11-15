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
          <div style={{display:"flex", justifyContent:"space-between",flexDirection:"row", borderRadius:"0px 0px 7px 7px",marginLeft:"20px", marginRight:"20px", }}>
            <div style={{display:"flex", flexDirection:"row", backgroundColor:"#5B5772", borderRadius:"0px 0px 7px 7px"}}>
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
              </FormControl>
            </div>
            </div>
            <div style={{backgroundColor:"#5B5772", display:"flex", boxSizing:"border-box", paddingLeft:"10px", paddingRight:"10px", paddingTop:"6px", paddingBottom:"10px", borderRadius:"0px 0px 7px 7px"}}>
              <Box  style={{display:"flex", backgroundColor:"#F2DC9B", width:250, height:40, borderRadius:"50px", alignItems:"center", flexDirection:"row", paddingLeft:"5px" }}>
                <SearchIcon />
                <Input placeholder="Buscar Empresa" />
              </Box>
            </div>
          </div>
            <div className="contenedor-empresas" style={{display:"flex", flexDirection:"row", flexWrap: "wrap", justifyContent: "center", marginTop:"20px"}}>
              <Link to="/Empresa" style={{textDecoration:'none'}} state={{nombre:"Gabriel Mudanzas",ubicacion:"CABA, Buenos Aires",puntuacion:3,telefono:"4245-6598",direccion:"Independencia 701",mail:"gabriel@mudanzas.com",descripcion:"somos una empresa de familia que se preocupa por la satisfaccion del cliente",precioXKm:100}}><Empresa nombre="Gabriel Mudanzas" puntuacion={3} ubicacion="CABA, Buenos Aires" precioXKm={100} /></Link>
              <Link to="/Empresa" style={{textDecoration:'none'}} state={{nombre:"Mudate con Cristian!",ubicacion:"Cipolletti, Rio Negro",puntuacion:4,telefono:"0254-6529",direccion:"Av San Luis 542",mail:"cristianmudanzas@gmail.com",descripcion:"La empresa Nro 1 de mudanzas de Rio Negro",precioXKm:421}}><Empresa nombre="Mudate con Cristian!" puntuacion={4} ubicacion="Cipolletti, Rio Negro" precioXKm={421} /></Link>
              <Link to="/Empresa" style={{textDecoration:'none'}} state={{nombre:"Mudanzas Ivana & co.",ubicacion:"Pehuajo, Buenos Aires",puntuacion:5,telefono:"2365-1547",direccion:"Rawson 2343",mail:"mudanzasivana@gmail.com",descripcion:"La empresa lider en mudanzas de Pehuajo",precioXKm:236}} ><Empresa nombre="Mudanzas Ivana & co." puntuacion={5} ubicacion="Pehuajo, Buenos Aires" precioXKm={236} /></Link>
              <Link to="/Empresa" style={{textDecoration:'none'}} state={{nombre:"Cordanzas",ubicacion:"Cosquin, Cordoba",puntuacion:1,telefono:"5452-6235",direccion:"Araoz Alfaro 1421",mail:"cordanzas@outlook.com",descripcion:"Fuimos la empresa en ayudar con la mudanza y logistica de las bandas en el Cosquin Rock",precioXKm:200}} ><Empresa nombre="Cordanzas" puntuacion={1} ubicacion="Cosquin, Cordoba" precioXKm={200} /></Link>
              <Link to="/Empresa" style={{textDecoration:'none'}} state={{nombre:"Estepicursor",ubicacion:"Santa Rosa, La Pampa",puntuacion:4,telefono:"8458-6952",direccion:"Av Uruguay 983",mail:"estepicursor@outlook.com",descripcion:"Empresa de familia lider en la Pampa", precioXKm:54}} ><Empresa nombre="Estepicursor" puntuacion={4} ubicacion="Santa Rosa, La Pampa" precioXKm={54} /></Link>
              <Link to="/Empresa" style={{textDecoration:'none'}} state={{nombre:"Transportista 'El Camionero",ubicacion:"Olavarria, Buenos Aires",puntuacion:5,telefono:"4587-6138",direccion:"Rivadavia 6658",mail:"elcamionero@hotmail.com",descripcion:"Empresa con camiones de primera calidad",precioXKm:504}}><Empresa nombre="Transportista 'El Camionero" puntuacion={5} ubicacion="Olavarria, Buenos Aires" precioXKm={504} /></Link>
              <Link to="/Empresa" style={{textDecoration:'none'}} state={{nombre:"Mudate ahora",ubicacion:"Lomas de zamora, Buenos Aires",puntuacion:4,telefono:"4512-6514",direccion:"Loria 9432",mail:"mudateya@gmail.com",descripcion:"Empresa que se destaca por su velocidad de mudanzas",precioXKm:132}}><Empresa nombre="Mudate ahora" puntuacion={4} ubicacion="Lomas de zamora, Buenos Aires" precioXKm={132} /></Link>
            </div>
        </div>
    );
}