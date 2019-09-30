import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  listitem: {
    display: "inline-block", 
    width: 150,
    textAlign: "right", 
    color: "#ffffff"
  }
  
});


const listItems = [
  {
    text: "Home",
    id: 1
  },
  {
    text: "About us",
    id: 2
},
{
    text: "Contact",
    id: 3
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
                    <Typography>{item.text}</Typography>
                </ListItemText>
              </ListItem>
              ))}
          </List>
          
      </div>
    );
  }

  export default MainNavigation;