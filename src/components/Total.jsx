import React from 'react'
import accounting from 'accounting'
import { Button, makeStyles } from '@material-ui/core'
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"20vh",
    },
    button:{
        marginTop: "2rem"
    }


}))

const  Total = ({getBasketTotal}) => {
    const Classes = useStyles()
    const[{basket}, dispatch] = useStateValue();
    return (
        <div className={Classes.root}>
            <h5>Total items: {basket?.length} </h5>
            <h5>{accounting.formatMoney(getBasketTotal(), "$")}</h5> 
            <Link to={"/checkout"}>
              <Button className={Classes.button} variant="contained" color='secondary'>Checkout</Button>
            </Link>
            

        </div>
  )
}

export default Total
