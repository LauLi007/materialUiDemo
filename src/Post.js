import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
   
  });


/*
const Link1 = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to="/" {...props} />
));
*/


const Post = ( { match, data }) => {
    const classes = useStyles();
    let post = data.find(p => p.id == match.params.postId);
    return(
        <div>
            <div style={{ margin: 200, paddingTop: 50 }}>
                <Typography variant="caption">Post #{post.id}</Typography>
                <Typography variant="h2n">{post.title}</Typography>
                <img className={classes.image} src={post.image} alt={post.title}/>
                <Typography variant="body1" className={classes.text}>{post.text}</Typography>
                <Button variant="outlined">Back to home</Button>
            </div>
        </div>
    )
}

export default Post;