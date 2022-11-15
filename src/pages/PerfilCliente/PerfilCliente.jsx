import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import CreateIcon from '@mui/icons-material/Create';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuCliente from '../../components/Menu/MenuCliente';
import Comentario from '../../components/Comentario/Comentario';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dropdown from 'react-bootstrap/Dropdown';
import {useState, useEffect} from 'react';


//import LocationOnIcon from '@mui/icons-material/LocationOn';
//import ShareIcon from '@mui/icons-material/Share';

//import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './PerfilCliente.css';

export default function Share(){

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

      function createData(empresa, fecha, estado,puntuacion) {
        return { empresa, fecha, estado, puntuacion };
      }

      const rows = [
        createData('Mudate con Cristian', '24/05/2019', 'Finalizada',<Rating value ={5}></Rating>),
        createData('Mudate con Cristian', '07/10/2020', 'Finalizada',<Rating value ={5}></Rating>),
        createData('Mudanzas Ivana & co.', '15/06/2022', 'Finalizada', <Rating value ={5}></Rating>),
      ];

      const [texto,setTexto] = useState('elegi la mudanza')
      const [texto2,setTexto2] = useState('')
      const [visibilidad,setVisivilidad] = useState(false)

      function setMudanza1() {
        setTexto(rows[0].empresa + ' ' + rows[0].fecha)
    };

    function setMudanza2() {
        setTexto(rows[1].empresa + ' ' + rows[1].fecha)
    };

    function setMudanza3() {
        setTexto(rows[2].empresa + ' ' + rows[2].fecha)
    };

    const handleSummit = (e) => {
    	setTexto2(e.target.value);
  	};

    function setComentario (){
        setVisivilidad(true)
    };
    
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
                            <div className="contenedor-nombre-mail">
                                <h2>James Rodriguez <CreateIcon style={{fontSize:30}}></CreateIcon></h2>
                                <h4>JRodriguez@gmail.com</h4>
                            </div>
                        </div> 
                    </div>

                    <div class="contenedor-mudanzas">
                        <h1>Mis Mudanzas</h1>
                        <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 500 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Empresa</StyledTableCell>
                                    <StyledTableCell align="right">Fecha</StyledTableCell>
                                    <StyledTableCell align="right">Estado</StyledTableCell>
                                    <StyledTableCell align="right">Mi puntuacion</StyledTableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.empresa}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.empresa}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.fecha}</StyledTableCell>
                                    <StyledTableCell align="right">{row.estado}</StyledTableCell>
                                    <StyledTableCell align="right">{row.puntuacion}</StyledTableCell>
                                    </StyledTableRow>
                                ))} 
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br/>
                    <h2>Dejanos un comentario!</h2>
                    <Dropdown className="drop">
                    <Dropdown.Toggle className="toggle" id="dropdown-basic"  >
                        {texto}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="item">
                    <Dropdown.Item onClick={setMudanza1} >{rows[0].empresa + ' ' + rows[0].fecha} </Dropdown.Item>
                    <Dropdown.Item onClick={setMudanza2} >{rows[1].empresa + ' ' + rows[1].fecha}</Dropdown.Item>
                    <Dropdown.Item onClick={setMudanza3} >{rows[2].empresa + ' ' + rows[2].fecha}</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>                   
                    <br/>
                    <br/>
                    <br/>
                    <TextField fullWidth label="escribe aqui tu comentario" id="fullWidth" onChange={handleSummit} />     
                    <br/>            
                    <Button variant="contained" onClick={setComentario}>Comenta</Button>
                    <br/>  
                    {visibilidad == true && 
                    <Comentario usuario={texto} texto={texto2} puntuacion={5}/>}
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


