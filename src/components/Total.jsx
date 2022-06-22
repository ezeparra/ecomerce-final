import React from 'react'
import accounting from 'accounting'
import { Button, makeStyles } from '@material-ui/core'
import { getBasketTotal } from '../reducer'
import { useStateValue } from '../StateProvider';

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

const  Total = () => {
    const Classes = useStyles()
    const[{basket}] = useStateValue();
    return (
        <div className={Classes.root}>
            <h5>Total items: {basket?.length} </h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket), "$")}</h5>
            <Button className={Classes.button} variant="contained" color='secondary'>Checkout</Button>

        </div>
  )
}

export default Total
