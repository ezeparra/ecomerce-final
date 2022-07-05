import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Products from './Products';
import product from '../product-data';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
}));

export default function Product ()  {
  const classes = useStyles();
const [productos,setProductos] = useState([])
const task = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(product)
  }, 2000);
})
useEffect(() => {
 task.then(res => setProductos(res))
 .catch(error => console.log(error)) 
}, [])
console.log(productos)
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        { productos.length >0 ?
          productos?.map(product => {
            console.log(product)
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} >
                <Products  product={product}/>
              </Grid>
            )
            }) :
            <h2>loading...</h2>  
        }
        
      </Grid>
    </div>
  );
}
