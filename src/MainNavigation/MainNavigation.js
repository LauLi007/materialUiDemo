import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { BrowserRouter as Router, Link } from "react-router-dom";


import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  listitem: {
    display: "inline-block", 
    width: 150,
    textAlign: "right", 
  }, 
  color: {
    color: "#ffffff", 
    textDecoration: "none"

  }
  
});


const listItems = [
  {
    text: "Home",
    id: 1,
    path: "/"
  },
  {
    text: "About us",
    id: 2, 
    path: "/about"
},
{
    text: "Contact",
    id: 3, 
    path: "/contact"
}

]

const MainNavigation = () => {
  const classes = useStyles();

    return (
      <div>
        
          <List component="nav">
              {listItems.map(item => (
              <ListItem className={classes.listitem} key={item.id}>
                <ListItemText>
                    <Link className={classes.color} to={item.path}>{item.text}</Link>
                </ListItemText>
              </ListItem>
              ))}
          </List>
          
      </div>
    );
  }

  export default MainNavigation;