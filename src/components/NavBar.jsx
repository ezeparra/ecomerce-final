import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/logo.png'
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margingbottom: "7rem",
  },
  appBar:{
      backgroundColor: "whitesmoke",
      boxShadow:"none",
  },
  grow: {
      flexGrow: 1,
  },
  buttom: {
    marginLeft: theme.spacing(3),
  },
  image:{
      marginRight:"10px",
      height: "3rem",
  },
  
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} className={classes.image} alt= "logo"/>
          </IconButton>
          <div className={classes.grow}></div>
          <Typography variant="h6" color='textPrimary' style={{marginRight: "15px"}}>
            Hello guest
          </Typography>
          <div className={classes.button}>
              <Button variant = "outlined">
                <strong>Sing In</strong>
              </Button>
              <IconButton arial-label ="show cart items" color= "inherit" > 
                    <Badge badgeContent={2} color="secondary">
                        <ShoppingCart fontSize="large" color='primary' />
                    </Badge>              
              </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
