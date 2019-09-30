import React from 'react';
import MainNavigation from '../MainNavigation/MainNavigation';
   
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  footerNavBar: {
      display: "block"
  }
});

const FooterNavBar = () => {
    const classes = useStyles();

    return(
        <div>
            <MainNavigation className={classes.footerNavBar}/>
        </div>
    )
}


export default FooterNavBar;