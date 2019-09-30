import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FooterNavBar from '../FooterNavBar/FooterNavBar';
import Contactform from '../Contactform/Contactform';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    background: "#009D9D", 
  }
});

const Footer = () => {
    const classes = useStyles();

    return (
        <div>
            <Container className={classes.root}>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <FooterNavBar />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Contactform/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer;