import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { ListItemAvatar, Avatar } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const Home = ({ cards }) => {
    
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [card, setCard] = React.useState({title:'',image:'c1.jpg',content:''});
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const width_proportion = '100%';
const height_proportion = '30%';

  const handleClickOpen = (card,event) => {
    setCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setCard({title:'',image:'c1.jpg',content:''});
    setOpen(false);
  };

  return (
      <div style={{ paddingLeft : 250,paddingRight : 250 ,paddingTop : 50 ,paddingBottom : 50}}> 
    <Grid container spacing={5} >
        {cards.map((c, index) => {
            return <Grid container item xs={4} spacing={1} >
                    <Card className={classes.root}>
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={require(`../assets/images/${c.image}`)}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {c.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {c.content}
                            
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary" onClick={(e)=> handleClickOpen(c,e)}>
                            Learn More
                        </Button>
                        </CardActions>
                    </Card>
                </Grid>
            
            
        })}
        </Grid>
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            
         >
            <DialogTitle id="responsive-dialog-title">{card.title}</DialogTitle>
            <DialogContent>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" style={{width:width_proportion,height:height_proportion}} variant="square" className={classes.square} src={require(`../assets/images/${card.image}`)} />
            </ListItemAvatar>
            <DialogContentText>
                <p>
                {card.content}

                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
                </p>
                <p>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species.
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species.
                    
                </p>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
                Close
            </Button>
            </DialogActions>
        </Dialog>
      </div>
  );
}

Home.defaultProps = {
    cards: [
      {
        image: 'c1.jpg',
        category: 'DEBT 101',
        updated: ' | Mar 19, 2020',
        title: `Things I’ve Learned on Twitter`,
        content: `If you're not comfortable about your debt, you're not alone. 45% of adults admint debt makes them
        feel anxious. Read on to see what debt looks like for an...`,
      },
      {
        image: 'c2.jpg',
        category: 'DEBT 101',
        updated: ' | Mar 19, 2020',
        title: `5 Books You Need to Read`,
        content: `If you're not comfortable about your debt, you're not alone. 45% of adults admint debt makes them
        feel anxious. Read on to see what debt looks like for an...`,
      },
      {
        image: 'c3.jpg',
        category: 'DEBT 101',
        updated: ' | Mar 19, 2020',
        title: `How to Know You’re On The Right Path`,
        content: `If you're not comfortable about your debt, you're not alone. 45% of adults admint debt makes them
        feel anxious. Read on to see what debt looks like for an...`,
      },
      {
        image: 'c4.jpg',
        category: 'DEBT 101',
        updated: ' | Mar 19, 2020',
        title: `Where to Find Support for Your Ambitions`,
        content: `If you're not comfortable about your debt, you're not alone. 45% of adults admint debt makes them
        feel anxious. Read on to see what debt looks like for an...`,
      },
      {
        image: 'c1.jpg',
        category: 'DEBT 101',
        updated: ' | Mar 19, 2020',
        title: `Things I’ve Learned on Twitter`,
        content: `If you're not comfortable about your debt, you're not alone. 45% of adults admint debt makes them
        feel anxious. Read on to see what debt looks like for an...`,
      },
      {
        image: 'c2.jpg',
        category: 'DEBT 101',
        updated: ' | Mar 19, 2020',
        title: `5 Books You Need to Read`,
        content: `If you're not comfortable about your debt, you're not alone. 45% of adults admint debt makes them
        feel anxious. Read on to see what debt looks like for an...`,
      },
    ],
  };
  
  export default Home;