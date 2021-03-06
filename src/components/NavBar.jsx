import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo  from '../assets/logo1.png'
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { signOut } from 'firebase/auth';
import { actionType } from '../reducer';
import {useNavigate} from 'react-router-dom'



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
    marginLeft: theme.spacing(2),
  },
  image:{
      marginRight:"10px",
      height: "3rem",
  },
  
  
}));

export default function NavBar() {
  const classes = useStyles();
  const[{basket, user}, dispatch] = useStateValue();
  const navigate = useNavigate()

  const handleAuth = ()=> {
    if(user){
      signOut();
      dispatch({
        type:actionType.EMPTY_BASKET,
        basket:[],
      });
      dispatch({
        type:actionType.SET_USER,
        user:null,
      });
      navigate("/")
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Link to="/">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} className={classes.image} alt= "logo"/>
          </IconButton>
          </Link>
          <div className={classes.grow}></div>
          <Typography variant="h6" color='textPrimary' style={{marginRight: "15px"}}>
            Hello {user ? user.email : "Guest"}
          </Typography>
          <div className={classes.button}>
            <Link to="/signin">
              <Button variant = "outlined" onClick={handleAuth}>
                <strong>{user ? "Sign out" : "Sign in" }</strong>
              </Button>
            </Link>
              
              <Link to="/checkout-page">
              <IconButton arial-label ="show cart items" color= "inherit" > 
                    <Badge badgeContent={basket?.length} color="secondary">
                        <ShoppingCart fontSize="large" color='primary' />
                    </Badge>              
              </IconButton>
              </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
