import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import './PostDetails.css';
const PostDetails = () => {
    const {PostId} = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
       const url = `https://jsonplaceholder.typicode.com/posts/${PostId}`;
       fetch(url)
       .then(res => res.json())
       .then(data => setPost(data))
    },[])
    return (
        <div className="post-details">
            <h2>Post Id: {PostId}</h2>
            <h4>Post No: {post.id} </h4>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Comments id={PostId}></Comments>
            
        </div>
    );
};

export default PostDetails;