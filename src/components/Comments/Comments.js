import React, { useState, useEffect } from 'react';
import "./Comments.css";

const Comments = (props) => {
    const {id} = props; 
    const [comment, setComment] = useState([]);
    const [image, setImage] = useState([]);
    
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    },[id])
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => {
            const img = data.results;
            const imgUrl = img.slice(0, comment.length);
            const url = imgUrl.map(img => img.picture.large);
            setImage(url);
        })
    },[comment])
  
    return (
        <>
           
            <div className="comment-box">
            {
            comment.map((com,index) => 
            <div className="comment-details">
                <div>
                    <img className="image-style" src={image[index]} alt=""/>
                </div>
                <div>
                <h5>Email: {com.email}</h5>
                <p><strong>Comment: </strong>{com.body}</p>
                </div>
           </div>
                )
            }

            </div>
            
        </>
    );
};

export default Comments;