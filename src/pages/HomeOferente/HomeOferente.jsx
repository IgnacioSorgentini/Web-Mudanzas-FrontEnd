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
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MenuOferente from '../../components/Menu/MenuOferente';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';


//Estas tres funciones son para la Transfer List que está en la ventana Editar.
function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
  }
  function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
  }
  function union(a, b) {
    return [...a, ...not(b, a)];
  }




export default function Empresa(){
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));



    const [openEditar, setOpenEditar] = React.useState(false);
    const handleClickOpenEditar = () => {
    setOpenEditar(true);
    };
    const handleCloseEditar = () => {
    setOpenEditar(false);
    };




    //Acá arranca un bloque de código que es todo relacionado a la Transfer List.
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState(['Embalaje', 'Descenso de pertenencias', 'Guardado de pertenencias', 'Mudanza compartida']); //Acá van TODAS las caractertisticas que consideremos adecuadas a tomar en cuenta.
    const [right, setRight] = React.useState([]);
    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);
    const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    };
    const numberOfChecked = (items) => intersection(checked, items).length;
    const handleToggleAll = (items) => () => {
        if (numberOfChecked(items) === items.length) {
          setChecked(not(checked, items));
        } else {
          setChecked(union(checked, items));
        }
      };
    const handleAllRight = () => {
        setRight(right.concat(left));
        setLeft([]);
    };
    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };
    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };
    const handleAllLeft = () => {
        setLeft(left.concat(right));
        setRight([]);
    };
    const customList = (items, title) => (
        <Card>
          <CardHeader
            sx={{ px: 2, py: 1 }}
            subheader={`${title}`}
          />
          <Divider />
          <List
            sx={{
              width: 200,
              height: 230,
              bgcolor: 'background.paper',
              overflow: 'auto',
            }}
            dense
            component="div"
            role="list"
          >
            {items.map((value) => {
              const labelId = `transfer-list-all-item-${value}-label`;
    
              return (
                <ListItem
                  key={value}
                  role="listitem"
                  button
                  onClick={handleToggle(value)}
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{
                        'aria-labelledby': labelId,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`${value}`} />
                </ListItem>
              );
            })}
            <ListItem />
          </List>
        </Card>
      );
    //Acá termina el bloque de código relacionado a la Transfer List






    return(
        <div style={{display:"flex", backgroundColor:"#D9D9D9",flex:1,flexDirection:"column",overflow:"hidden"}}>
          <MenuOferente />
        <div style={{display:"flex",flex:9,flexDirection:"column",alignItems:"center"}}>
            <div style={{display:"flex",flexDirection:"row",margin:"20px",width:"90vw"}}>
                <div style={{display:"flex",flex:1,margin:"20px",flexDirection:"column",alignItems:"center",height:"60vh",width:"40vw" }}>
                    <div style={{display:"flex",flex:1,flexDirection:"column",justifyContent:"flex-start" }}>
                        <img style={{borderRadius:"5px",height:"35vh",width:"20vw"}}
                        src="https://muchosnegociosrentables.com/wp-content/uploads/2020/09/como-crear-una-empresa-de-mudanzas.jpg"
                        />
                        <div style={{alignItems:"center", marginTop:"10px"}}>
                            <LocationOnIcon/>
                            Localidad
                        </div>
                        <div style={{fontSize:30}}>Nombre empresa</div>
                        
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <Rating name="read-only" value={3} readOnly />
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
                    <div style={{display:"flex",minWidth:"100%", minHeight:"20%", justifyContent:"end", alignItems:"center", boxSizing:"border-box", paddingRight:"10px"}}><Button variant="contained" style={{backgroundColor:"#FD841F"}} size="large" endIcon={<EditIcon />} onClick={handleClickOpenEditar}>Editar</Button></div>
                    <Dialog open={openEditar} onClose={handleCloseEditar} maxWidth="sm">
                        <DialogTitle>Editar informacion de la empresa</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Modificar caracteristicas de la empresa.
                            </DialogContentText>
                            <div>
                                <Grid container spacing={2} justifyContent="center" alignItems="center">
                                    <Grid item>{customList(left, 'Disponibles')}</Grid>
                                    <Grid item>
                                        <Grid container direction="column" alignItems="center">
                                            <Button
                                                sx={{ my: 0.5 }}
                                                variant="outlined"
                                                size="small"
                                                onClick={handleCheckedRight}
                                                disabled={leftChecked.length === 0}
                                                aria-label="move selected right"
                                                >
                                                    &gt;
                                            </Button>
                                            <Button
                                                sx={{ my: 0.5 }}
                                                variant="outlined"
                                                size="small"
                                                onClick={handleCheckedLeft}
                                                disabled={rightChecked.length === 0}
                                                aria-label="move selected left"
                                            >
                                                &lt;
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid item>{customList(right, 'Seleccionadas')}</Grid>
                                </Grid>
                            </div>
                            <div style={{marginTop:"50px"}}>
                            <DialogContentText>
                                Modificar descripcion de la empresa.
                                <TextField
                                autoFocus
                                margin=""
                                id="name"
                                label="Descripcion"
                                type="email"
                                fullWidth
                                variant="standard"
                            />
                            </DialogContentText>
                            </div>
                            <div style={{marginTop:"50px"}}>
                            <DialogContentText>
                                Modificar numero de telefono de la empresa.
                                <TextField
                                autoFocus
                                margin=""
                                id="name"
                                label="Telefono"
                                type="email"
                                fullWidth
                                variant="standard"
                            />
                            </DialogContentText>
                            </div>
                            <div style={{marginTop:"50px"}}>
                            <DialogContentText>
                                Modificar direccion de la empresa.
                                <TextField
                                autoFocus
                                margin=""
                                id="name"
                                label="Direccion"
                                type="email"
                                fullWidth
                                variant="standard"
                            />
                            </DialogContentText>
                            </div>
                            <div style={{marginTop:"50px"}}>
                            <DialogContentText>
                                Modificar direccion de correo electronico de la empresa.
                                <TextField
                                autoFocus
                                margin=""
                                id="name"
                                label="Mail"
                                type="email"
                                fullWidth
                                variant="standard"
                            />
                            </DialogContentText>
                            </div>
                            
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseEditar}>Confirmar cambios</Button>
                            <Button onClick={handleCloseEditar}>Cancelar</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
            <div style={{display:"flex",margin:"20px",backgroundColor:"#A6836F",justifyContent:"center",alignItems:"center",width:"90vw",height:150,borderRadius:"5px",color:"white",fontSize:40}} >
                Descripcion de la empresa
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
                <div><PhoneIcon/>Telefono</div>
                <div><HomeIcon/>Direccion</div>
                <div><MailIcon/>Mail</div>
            </div>

        </div>
        </div>
            
    );
}