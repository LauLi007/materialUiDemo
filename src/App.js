import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import MainNavigation from './MainNavigation/MainNavigation';
import Posts from './Posts/Posts';
import Footer from './Footer/Footer';
import About from './About';
import Contact from './Contact';
import postdata from './Postdata';
import Post from './Post';



import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 30,
    background: "linear-gradient(to right bottom, #009d9d, #009d9d, #009d9d, #009d9d, #009d9d, #0fa5a4, #19acab, #22b4b2, #33c5c2, #42d7d1, #51e9e1, #5ffbf1);"
  },
  title: {
    flexGrow: 1
  }
});


const App = () => {
  const classes = useStyles();
  
  return (
    <div>
      <Router>
        <AppBar className={classes.root}>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              MaterialUI
            </Typography>
            <MainNavigation></MainNavigation>
          </Toolbar>
        </AppBar>
        
        <Switch>
          <Route exact path="/" component={Posts}/> 
          <Route path="/" component={About}/> 
          <Route path="/" component={Contact}/> 
          <Route path={`/:postId`} render={ (props) => <Post data={postdata} {...props} />}/>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}


export default App;
