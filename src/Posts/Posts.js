import React, { Component } from 'react';
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import postdata from '../Postdata';


const Posts = ({ match }) => {
    return (
      <div style={{marginTop:150, padding:30}}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={3}
            >
            {postdata.map(postitem => (  
            <Grid item xs={4}>
                <Card key={postitem.id}>
                    <CardMedia 
                        component="img"
                        alt={postitem.title}
                        height="150"
                        image={postitem.image}>     
                    </CardMedia>
                    <CardContent>
                        <Typography>{postitem.title}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined" color="primary" href={postitem.url}>Read more</Button>
                    </CardActions>
                </Card>  
            </Grid>
            ))}
        </Grid>
     </div>

    );
  }


export default Posts;