import React, { Component } from 'react';
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const post = [
  {
   title: "My first post",
   image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/15/16/china-coffee-cup.jpg?w968h681",
   description: "This is my first post",
   url: "https://www.google.com"
  },
 
  {
   title: "My second post",
   image: "https://www.incimages.com/uploaded_files/image/970x450/getty_938993594_401542.jpg",
   description: "This is my second post",
   url: "https://www.bc.fi"
},
 
  {
   title: "My third post",
   image: "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555306143/shape/mentalfloss/istock_43355764_small.jpg",
   description: "This is my third post",
   url: "https://www.bc.fi"
},
  {
   title: "My fourth post",
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9yfojEU_UTtjmxLaAQ0Ycf99UYWOuuoNMhoEaUWkRDjC_9TPV",
   description: "This is my fourth post",
   url: "https://www.bc.fi"
},
{
  title: "My fifth post",
  image: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/AN275-cup-of-coffee-732x549-Thumb.jpg?w=756&h=567",
  description: "This is my third post",
  url: "https://www.bc.fi"
},
{
  title: "My sixth post",
  image: "https://cdn.newsapi.com.au/image/v1/ae20e9c91e2b36ca43623ed63cbe7778?width=650",
  description: "This is my third post",

},
{
  title: "My seventh post",
  image: "https://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/6l/fg/p06lfg5t.jpg",
  description: "This is my third post",
  url: "https://www.bc.fi"
}
 ]



class Posts extends Component {
  render() {
    return (
      <div style={{marginTop:200, padding:30}}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={3}
            >
            {post.map(postitem => (  
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
}
export default Posts;