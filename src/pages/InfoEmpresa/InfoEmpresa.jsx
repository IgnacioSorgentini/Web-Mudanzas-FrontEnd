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
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuCliente from '../../components/Menu/MenuCliente';
import { useLocation } from 'react-router-dom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Slider from '@mui/material/Slider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



export default function Empresa(){
    const location = useLocation()
    const { from } = location.state

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));


      const [stateSimulador, setStateSimulador] = React.useState({
        bottom: false,
      });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setStateSimulador({ ...stateSimulador, [anchor]: open });
    };
    const list = () => (
        <Box
          sx={{ width: 'auto'}}
          role="presentation"
          onKeyDown={toggleDrawer('bottom', false)}
        >
        <div style={{padding:"5%"}}>
            <p>Simulador de costos</p>
            <p>Deslize la barra segun la cantidad de kilometros y observe cambiar el precio final</p>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </div>
        </Box>
      );



      const [openContratar, setOpenContratar] = React.useState(false);
      const theme = useTheme();
      const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
      const handleClickOpenContratar = () => {
        setOpenContratar(true);
      };
      const handleCloseContratar = () => {
        setOpenContratar(false);
      };

      

    return(
        <div style={{display:"flex", backgroundColor:"#D9D9D9",flex:1,flexDirection:"column"}}>
          <MenuCliente />
        <div style={{display:"flex",flex:9,flexDirection:"column",alignItems:"center"}}>
            <div style={{display:"flex",flexDirection:"row",margin:"20px",width:"90vw"}}>
                <div style={{display:"flex",flex:1,margin:"20px",flexDirection:"column",alignItems:"center",height:"60vh",width:"40vw" }}>
                    <div style={{display:"flex",flex:1,flexDirection:"column",justifyContent:"flex-start" }}>
                        <img style={{borderRadius:"5px",height:"35vh",width:"20vw"}}
                        src="https://muchosnegociosrentables.com/wp-content/uploads/2020/09/como-crear-una-empresa-de-mudanzas.jpg"
                        />
                        <div style={{alignItems:"center"}}>
                            <LocationOnIcon/>
                            {location.state.ubicacion}
                        </div>
                        <div style={{fontSize:30}}>{location.state.nombre}</div>
                        
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <Rating style={{fontSize:50}} value={location.state.puntuacion}/>
                            <ShareIcon style={{fontSize:50}}/>
                        </div>
                    </div>
                </div>

                <div style={{display:"flex",borderRadius:"5px",backgroundColor:"#A6836F",flexDirection:"column",margin:"20px",alignItems:"flex-start",height:"60vh",width:"60vw", boxSizing:"border-box"}}>
                    <div style={{display:"flex", flexDirection:"row", minWidth:"100%", minHeight:"20%"}}>
                        <CheckCircleIcon style={{color:"#F2DC9B",fontSize:35}}></CheckCircleIcon> <div style={{color:"white",fontSize:30}}>Caracteristicas</div>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", boxSizing:"border-box", minWidth:"100%", minHeight:"60%", padding:"10px"}}>
                    <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={8}>
                                    <Item style={{backgroundColor:"#F2DC9B"}}>Caracteristica 1</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{backgroundColor:"#F2DC9B"}}>Caracteristica 2</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{backgroundColor:"#F2DC9B"}}>Caracteristica 3</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{backgroundColor:"#F2DC9B"}}>Caracteristica 4</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{backgroundColor:"#F2DC9B"}}>Caracteristica 5</Item>
                                </Grid>
                                <Grid item xs="auto">
                                    <Item style={{backgroundColor:"#F2DC9B"}}>Caracteristica 3</Item>
                                </Grid>
                                <Grid item xs= {8}>
                                    <Item style={{backgroundColor:"#F2DC9B"}}>Caracteristica 3</Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                    <div style={{minWidth:"100%", minHeight:"20%", boxSizing:"border-box", display:"flex", flexDirection:"row", justifyContent:"end"}}>
                        <div style={{display:"flex",minWidth:"20%", minHeight:"10%", justifyContent:"end", alignItems:"center", boxSizing:"border-box", paddingRight:"10px"}}><Button variant="contained" style={{backgroundColor:"#FD841F"}} size="large" endIcon={<AttachMoneyIcon />} onClick={toggleDrawer('bottom', true)}>Simular costos</Button></div>
                        <div style={{display:"flex",minWidth:"20%", minHeight:"10%", justifyContent:"end", alignItems:"center", boxSizing:"border-box", paddingRight:"10px"}}><Button variant="contained" style={{backgroundColor:"#FD841F"}} size="large" endIcon={<AddShoppingCartIcon /> } onClick={handleClickOpenContratar}>Contratar</Button></div>
                        <Dialog
                            fullScreen={fullScreen}
                            open={openContratar}
                            onClose={handleCloseContratar}
                            aria-labelledby="responsive-dialog-title"
                            >
                                <DialogTitle id="responsive-dialog-title">
                                    {"Contratar empresa"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Contenido
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button autoFocus onClick={handleCloseContratar}>
                                        Contratar
                                    </Button>
                                    <Button onClick={handleCloseContratar} autoFocus>
                                        Cancelar
                                    </Button>
                                </DialogActions>
                            </Dialog>
                    </div>
                </div>

            </div>

            <div style={{display:"flex",margin:"20px",backgroundColor:"#A6836F",justifyContent:"center",alignItems:"center",width:"90vw",height:150,borderRadius:"5px",color:"white",fontSize:40}} >
            {location.state.descripcion}
            </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",flexWrap:"wrap",alignItems:"center", marginLeft:"30px"}}>
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
                <div><PhoneIcon/>{location.state.telefono}</div>
                <div><HomeIcon/>{location.state.direccion}</div>
                <div><MailIcon/>{location.state.mail}</div>
            </div>
        </div>

        <React.Fragment key={'bottom'}>
          <SwipeableDrawer
            anchor={'bottom'}
            open={stateSimulador['bottom']}
            onClose={toggleDrawer('bottom', false)}
            onOpen={toggleDrawer('bottom', true)}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
            
    );
}