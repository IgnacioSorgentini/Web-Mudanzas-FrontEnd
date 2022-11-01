import React from "react";
import './MisContrataciones.css';
import MenuOferente from '../../components/Menu/MenuOferente';
import Contratacion from "../../components/Contratacion/Contratacion";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function MisContrataciones(){
    
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

      function createData(cliente, fecha) {
        return { cliente, fecha };
      }

      const rows = [
        createData('Juan Fernando Quintero', '21/07/2022'),
        createData('Armando Esteban Quito', '03/03/2022'),
        createData('Jorge Carrascal', '23/05/2022'),
        createData('Jimena Baron', '15/06/2022'),
        createData('Antonia De La Fuente', '07/04/2022'),
        createData('Gabriela Fernandez', '31/10/2022'),
      ];

      const rows2 = [
        createData('Emiliano Martinez', '27/05/2021'),
        createData('Cristian Romero', '13/11/2021'),
        createData('Julian Alvarez', '05/04/2022'),
        createData('Olivia Gimenez', '29/07/2021'),
        createData('Constanza Torres', '05/01/2022'),
        createData('Gabriel Batistuta', '16/06/2021'),
      ];
    
    
    return(
        <div className="MisContrataciones" style={{display:"flex", backgroundColor:"#D9D9D9",height:'100vh',flexDirection:"column"}}>
            <MenuOferente />
            <div className="contenedor-contrataciones">
                <div className="en-proceso">
                    <div className="titulo">
                        <h3>Mudanzas en proceso</h3>
                    </div>
                    <div className="lista-mudanzas">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 500 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Cliente</StyledTableCell>
                                    <StyledTableCell align="right">Fecha Inicio</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.cliente}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.cliente}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.fecha}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </div>
                </div>
                <div className="completadas">
                    <div className="titulo">
                        <h3>Mudanzas completadas</h3>
                    </div>
                    <div className="lista-mudanzas">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 500 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Cliente</StyledTableCell>
                                    <StyledTableCell align="right">Fecha Finalizacion</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows2.map((row) => (
                                    <StyledTableRow key={row.cliente}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.cliente}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.fecha}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MisContrataciones;
