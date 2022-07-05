import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete'
import  accounting  from 'accounting';
import { useStateValue } from '../StateProvider';
import { actionType } from '../reducer';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
      marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  CardActions:{
    display: "flex",
    justifyContent:"space-between",
    textAlingn: "center"
  },
  cardRating:{
    display:"flex",
  }
}));

export default function CheckoutCard  ({product}) {
  const classes = useStyles();
  const[{basket},dispatch] = useStateValue();
  const [expanded, setExpanded] = React.useState(false);
  const {id, name, image, price, rating,} = product
   const handleExpandClick = () => {
     setExpanded(!expanded);
   }
  console.log(product)
  const removeItem = () => dispatch({
    type: actionType.REMOVE_ITEM,
    id:id,
  })
  console.log (basket)
  
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant='h5'
            color='textSecondary'
            >
                {accounting.formatMoney(price, "$")}
            </Typography>
        }
        title={name}
        subheader="stock"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardActions disableSpacing className={classes.CardActions}>
       <div className={classes.cardRating}>
            {Array(rating)
                .fill ()
                .map((_, i) => (
                    <p key={i}>&#11088;</p>
            ))}
        </div>
        <IconButton>
            <DeleteIcon fontSize='large'onClick={removeItem}/>  
        </IconButton>     
      </CardActions>
    </Card>
  );
}
