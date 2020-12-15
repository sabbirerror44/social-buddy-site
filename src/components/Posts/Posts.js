import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Posts.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 280,
      backgroundColor: '#f9f7cf',
    },
   
  });

const Posts = (props) => {
    const classes = useStyles();

    const {userId, id, title, body} = props.post;
    const history = useHistory();

    const handleShowMore = (PostId) => {
        const url = `/post/${PostId}`;
        history.push(url);

    }
    return (
       <Card className={classes.root}>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {body}
          </Typography>
        </CardContent>

      <CardActions style={{justifyContent: 'center'}}>
        <Button className='center' onClick={()=>handleShowMore(id)} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        
    );
};

export default Posts;