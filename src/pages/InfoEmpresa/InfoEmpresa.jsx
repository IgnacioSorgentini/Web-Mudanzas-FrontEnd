import * as React from 'react';
import '../../Fuentes.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Comentario from '../../components/Comentario/Comentario';
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
import { OutlinedInput, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Mail } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';




const estiloSimulador = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',

}));



const PrettoSlider = styled(Slider)({
  color: 'BLACK',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: 'BLACK',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});


const marks = [
    {
      value: 10,
      label: '10km',
    },
    {
      value: 20,
      label: '20km',
    },
    {
      value: 30,
      label: '30km',
    },
    {
      value: 40,
      label: '40km',
    },
    {
        value: 50,
        label: '50km'
    },
    {
        value: 60,
        label: '60km'
    },
    {
        value: 70,
        label: '70km'
    },
    {
      value: 80,
      label: '80km'
    },
    {
      value: 90,
      label: '90km'
    },
    {
      value: 100,
      label: '100km'
    },
  ];


export default function Empresa(){


    const [valueCalendario, onChangeCalendario] = React.useState(new Date());

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
          sx={{ width: 'auto', backgroundColor:'#CCCCCC'}}
          role="presentation"
          onKeyDown={toggleDrawer('bottom', false)}
        >
        <div style={{padding:"5%", color:"black"}}>
            <div>
                <h3>Simulador de costos</h3>
            </div>
            <div>
                <p>Deslize la barra segun la cantidad de kilometros y observe cambiar el precio final.</p>
            </div>
            <div>

            </div>
            <div>
                <OutlinedInput readOnly disabled
                    value={valueSimulador * location.state.precioXKm}
                    size="small"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    sx = {{backgroundColor:"#E0E0E0"}}
                />
                <br/>
                <br/>
                <br/>
                <PrettoSlider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" min={0} max={100} step={0.5} marks={marks}  onChange={handleSliderChange} aria-labelledby="input-slider" />
            </div>
        </div>
        </Box>
      );



      const [valueSimulador, setValueSimulador] = React.useState(0);
      const handleSliderChange = (event, newValue) => {
        setValueSimulador(newValue);
      };
     



      





      const [openContratar, setOpenContratar] = React.useState(false);
      const theme = useTheme();
      const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
      const handleClickOpenContratar = () => {
        setOpenContratar(true);
      };
      const handleCloseContratar = () => {
        setOpenContratar(false);
      };


      const [medioDePago, setMedioDePago] = React.useState('');
      const handleChangeMedioDePago = (event) => {
        setMedioDePago(event.target.value);
      };




      const [openCompartir, setOpenCompartir] = React.useState(false);
      const handleClickOpenCompartir = () => {
        setOpenCompartir(true);
      };
      const handleCloseCompartir = () => {
        setOpenCompartir(false);
      };

      const [openMapa, setOpenMapa] = React.useState(false);
      const handleClickOpenMapa = () => {
        setOpenMapa(true);
      };
      const handleCloseMapa = () => {
        setOpenMapa(false);
      };





    return(
        <div style={{display:"flex", backgroundColor:"#D9D9D9",flex:1,flexDirection:"column"}}>
          <MenuCliente />
        <div style={{display:"flex",flex:9,flexDirection:"column",alignItems:"center"}}>
            <div style={{display:"flex",flexDirection:"row",margin:"20px",width:"90vw"}}>
                <div style={{display:"flex",flex:1,marginTop:"20px",flexDirection:"column",alignItems:"center", height:"60vh",width:"40vw", backgroundColor:"#ADADAD", borderRadius:"10px" }}>
                    <div style={{display:"flex",flex:1,flexDirection:"column",justifyContent:"center" }}>
                        <img style={{borderRadius:"5px",height:"35vh",width:"20vw"}}
                        src="https://muchosnegociosrentables.com/wp-content/uploads/2020/09/como-crear-una-empresa-de-mudanzas.jpg"
                        />
                        
                        <div style={{fontSize:30}}><h2>{location.state.nombre}</h2></div>
                        <div style={{display:"flex"}}>   
                            <div style={{alignItems:"center", marginTop:"10px", marginBottom:"5px"}}>
                            <Chip icon={<LocationOnIcon/>} label={<h6>{location.state.ubicacion}</h6>} onClick={handleClickOpenMapa} />
                            <Dialog
                              open={openMapa}
                              onClose={handleCloseMapa}
                              aria-labelledby="alert-dialog-title"
                              aria-describedby="alert-dialog-description"
                            >
                              <iframe style={{height:"50vh",width:"40vw"}} src="https://maps.google.com/maps?q=Rawson%202343%20Buenos%20Aires&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </Dialog>
                            </div>
                        </div>
                        
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                            <Rating value={location.state.puntuacion} style={{color:"#5C5C5C"}} readOnly/>
                            <Button style={{color:"black"}} onClick={handleClickOpenCompartir}><ShareIcon style={{fontSize:20}}/></Button>
                            <Dialog
                                open={openCompartir}
                                onClose={handleCloseCompartir}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Compartir informacion de la empresa"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Seleccione una v??a por la cual desee compartir la informacion de {location.state.nombre} con algun conocido.
                                    </DialogContentText>
                                    <div>
                                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                          <ListItem>
                                            <ListItemAvatar>
                                              <Avatar>
                                                <WhatsAppIcon />
                                              </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Whatsapp" />
                                          </ListItem>
                                          <ListItem>
                                            <ListItemAvatar>
                                              <Avatar>
                                                <InstagramIcon />
                                              </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Instagram" />
                                          </ListItem>
                                          <ListItem>
                                            <ListItemAvatar>
                                              <Avatar>
                                                <MailIcon />
                                              </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Mail" />
                                          </ListItem>
                                        </List>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>

                <div style={{display:"flex",borderRadius:"10px",backgroundColor:"#5B5772",flexDirection:"column", marginTop:"20px", marginBottom:"20px", marginLeft:"20px", alignItems:"flex-start",height:"60vh",width:"60vw", boxSizing:"border-box"}}>
                    <div style={{display:"flex", flexDirection:"row", minWidth:"100%", minHeight:"20%"}}>
                      <div style={{color:"white",fontSize:30, paddingLeft:"10px"}}><h3>Caracteristicas</h3></div>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", boxSizing:"border-box", minWidth:"100%", minHeight:"60%", padding:"10px"}}>
                    <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={8}>
                                    <Item style={{backgroundColor:"#D9D9D9", color:"black"}}><h6>Caracteristica 1</h6></Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{backgroundColor:"#D9D9D9", color:"black"}}><h6>Caracteristica 2</h6></Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{backgroundColor:"#D9D9D9", color:"black"}}><h6>Caracteristica 3</h6></Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{backgroundColor:"#D9D9D9", color:"black"}}><h6>Caracteristica 4</h6></Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item style={{backgroundColor:"#D9D9D9", color:"black"}}><h6>Caracteristica 5</h6></Item>
                                </Grid>
                                <Grid item xs="auto">
                                    <Item style={{backgroundColor:"#D9D9D9", color:"black"}}><h6>Caracteristica 6</h6></Item>
                                </Grid>
                                <Grid item xs= {8}>
                                    <Item style={{backgroundColor:"#D9D9D9", color:"black"}}><h6>Caracteristica 7</h6></Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                    <div style={{minWidth:"100%", minHeight:"20%", boxSizing:"border-box", display:"flex", flexDirection:"row", justifyContent:"end"}}>
                        <div style={{display:"flex",minWidth:"20%", minHeight:"10%", justifyContent:"end", alignItems:"center", boxSizing:"border-box", paddingRight:"10px"}}><Button variant="contained" style={{backgroundColor:"#F7D794", color:"black"}} size="large" endIcon={<AttachMoneyIcon />} onClick={toggleDrawer('bottom', true)}><h5>Simular costos</h5></Button></div>
                        <div style={{display:"flex",minWidth:"20%", minHeight:"10%", justifyContent:"end", alignItems:"center", boxSizing:"border-box", paddingRight:"10px"}}><Button variant="contained" style={{backgroundColor:"#F7D794", color:"black"}} size="large" endIcon={<AddShoppingCartIcon /> } onClick={handleClickOpenContratar}><h5>Contratar</h5></Button></div>
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
                                        Ingrese su numero de telefono para que la empresa pueda contactarse con usted
                                    </DialogContentText>
                                    <TextField label="Numero de telefono" id="outlined-start-adornment" sx={{ m: 1, width: '25ch' }} InputProps={{startAdornment: <InputAdornment position="start">+54 9</InputAdornment>,}} margin="normal" fullWidth />
                                    <br/>
                                    <br/>
                                    <DialogContentText>
                                        Elija una fecha determinada para realizar la mudanza
                                    </DialogContentText>
                                    <div style={{display:"flex", justifyContent:"center"}}>
                                    <Calendar onChange={onChangeCalendario} value={valueCalendario} />
                                    </div>
                                    <br/>
                                    <br/>
                                    <DialogContentText>
                                        El pago se puede realizar ??nicamente por MercadoPago
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

            <div style={{display:"flex",margin:"20px",backgroundColor:"#5B5772",justifyContent:"center",alignItems:"center",width:"90vw",height:150,borderRadius:"10px",color:"white",fontSize:40}} >
            <h3>{location.state.descripcion}</h3>
            </div>
            <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center", marginLeft:"30px", width:"90vw", margin:"20px", justifyContent:"space-between"}}>
                <Comentario usuario="Pedro Severi" texto="Excelente servicio!" puntuacion={5}/>
                <Comentario usuario="Cristian Escujuri" texto="Me gust??, aunque no lo elegir??a otra vez, creo que hay mejores opciones." puntuacion={4} />
                <Comentario usuario="Ignacio Sorgentini" texto="Fueron r??pidos, eficientes, y muy educados. Recomendadisimo." puntuacion={5}/>
                <Comentario usuario="Ivana Cardozo" texto="Personalmente me pareci?? muy bueno todo! Volver??a a contratar esta empresa." puntuacion={4}/>
                <Comentario usuario="Gabriel Torres" texto="Despues de Cordanzas, considero que esta es la mejor empresa para hacer una mudanza." puntuacion={4}/>
                <Comentario usuario="Franco Vercesi" texto="Me sorprende ver tantos comentarios positivos. En mi caso no fue una experiencia tan amena. Quiz??s no era su d??a." puntuacion={2}/>
            </div>
            <div style={{display:"flex",backgroundColor:"#5B5772",margin:"20px",width:"90vw",height:150,borderRadius:"10px",color:"white",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",}} >
                <div style={{display:"flex", flexDirection:"row"}}><PhoneIcon/><h5>{location.state.telefono}</h5></div>
                <div style={{display:"flex", flexDirection:"row"}}><HomeIcon/><h5>{location.state.direccion}</h5></div>
                <div style={{display:"flex", flexDirection:"row"}}><MailIcon/><h5>{location.state.mail}</h5></div>
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