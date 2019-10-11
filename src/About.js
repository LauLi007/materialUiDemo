import React from 'react';
   
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root:{
      marginTop: 250,
  }
});

const About = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <h1>About page</h1>
        </div>
    )
}


export default About;