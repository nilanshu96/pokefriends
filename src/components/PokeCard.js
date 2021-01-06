import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
  root: {
    width: 200,
    height: 250,
    backgroundColor: theme.palette.secondary.dark
  },
  media: {
      height: '100%'
  },
  img: {
      backgroundColor: theme.palette.secondary.main,
      objectFit: 'contain'
  },
  txt: {
      color: theme.palette.secondary.contrastText
  }
}));

const PokeCard = ({name, height, weight, img}) => {

    const classes = useStyles();

  return (
    <Card className={classes.root} elevation={5}>
      <CardActionArea >
        
        <CardHeader 
        //   titleTypographyProps= {{variant: 'h4'}}
          title={name}
        />

        <CardMedia className={classes.img}
          component='img'
          height='100px'
          width='100px'
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body1" component="p">
            Height: {height}
          </Typography>
          <Typography variant="body1" component="p">
            Weight: {weight}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

}

export default PokeCard;