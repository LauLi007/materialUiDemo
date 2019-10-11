import React from 'react';
   
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root:{
        marginTop: 250,
    }
     
});

const Contact = () => {
    const classes = useStyles();

    return(
        <div>
            <h1 className={classes.root}>Contact page</h1>
        </div>
    )
}


export default Contact;