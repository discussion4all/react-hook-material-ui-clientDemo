import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import PersonIcon from '@material-ui/icons/Person';
import TodayIcon from '@material-ui/icons/Today';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import WcIcon from '@material-ui/icons/Wc';

import { ListItemIcon } from '../../node_modules/@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '90ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const Friends = ({ cards }) => {
    
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState({name:'',image:'c1.jpg',age:'',dob:'',gender:''});

  const handleClick = (c,event) => {
      console.log("value",c);
    setUser(c);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setUser({name:'',image:'c1.jpg',age:'',dob:'',gender:''});
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-menu' : undefined;

  return (
    <div style={{paddingLeft : 300,paddingRight : 250 ,paddingTop : 50 ,paddingBottom : 50}}>  
    <List className={classes.root}>
    {cards.map((c, index) => {
        return <div> 
                <ListItem key={index} button onClick={(e)=> handleClick(c,e)} style={{width:800,height:80}}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={require(`../assets/images/${c.image}`)} style={{width:50,height:50}}/>
                </ListItemAvatar>
                <ListItemText primary={c.name} />
                </ListItem>
                <Divider variant="inset" component="li" />
               </div>
        })}
    </List>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" style={{width:200,height:150}} variant="square" className={classes.square} src={require(`../assets/images/${user.image}`)} />
            </ListItemAvatar>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">{user.name}</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <TodayIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">{user.dob}</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CallToActionIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">{user.age}</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <WcIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">{user.gender}</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}

Friends.defaultProps = {
    cards: [
      {
        image: 'c1.jpg',
        name: 'Jay Patel',
        age: '19',
        dob: ' Mar 19, 1998',
        gender:'Male'
      },
      {
        image: 'c2.jpg',
        name: 'Shivam Patel',
        age: '19',
        dob: ' Mar 19, 1998',
        gender:'Male'
      },
      {
        image: 'c3.jpg',
        name: 'Pooja Patel',
        age: '19',
        dob: ' Mar 19, 1998',
        gender:'Female'
      },
      {
        image: 'c4.jpg',
        name: 'Rajvir Patel',
        age: '19',
        dob: ' Mar 19, 1998',
        gender:'Male'
      },
      {
        image: 'c3.jpg',
        name: 'Pooja Patel',
        age: '19',
        dob: ' Mar 19, 1998',
        gender:'Female'
      },
      {
        image: 'c4.jpg',
        name: 'Rajvir Patel',
        age: '19',
        dob: ' Mar 19, 1998',
        gender:'Male'
      },
      {
        image: 'c4.jpg',
        name: 'Rajvir Patel',
        age: '19',
        dob: ' Mar 19, 1998',
        gender:'Male'
      },
    ],
  };
  
  export default Friends;