import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    form: {
        display: "block",
        background: "#ffffff",
        width: "90%",
        padding: 20,
        paddingBottom: 30,
        margin: 10
  }, 
  submitButton: {
      display: "block", 
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
  }
});


const Contactform = () => {
    const classes = useStyles();
        return(
        <div>
            <form className={classes.form}>
                
                <Typography>Form</Typography>
                <TextField label="First name" margin="normal" fullWidth variant="outlined"></TextField>
                <TextField label="Lastname" margin="normal" fullWidth variant="outlined"></TextField>
                <TextField label="Email" margin="normal" fullWidth type="email" required variant="filled"></TextField>
                <TextField label="Phone" margin="normal" fullWidth type="phone" required variant="filled"></TextField>
                <FormControl>
                    <FormLabel component="legend">Choose your favorite coffee</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="female" control={<Radio/>} label="Jamaican" />
                            <FormControlLabel value="male" control={<Radio/>} label="New York" />
                            <FormControlLabel value="other" control={<Radio/>} label="Brasil" />
                        </RadioGroup>
                        <FormLabel component="legend">Subscription</FormLabel>
                        <FormControlLabel control={<Checkbox/>} label="Subscribe for newsletter" labelPlacement="end"/>
                        <FormControlLabel control={<Checkbox/>} label="Accept conditions" labelPlacement="end"/>
                </FormControl>
                <Button variant="contained" color="primary" className={classes.submitButton}>SUBMIT</Button>
            </form>
        </div>
    )
}

export default Contactform;