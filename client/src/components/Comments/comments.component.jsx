import { CommentContainer, CommentForm } from "./comments.styles";
import { useState } from "react";
import {useParams} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';

const Comment = () => {
    const {id} = useParams();
    const { user, isAuthenticated} = useAuth0();
    const [formState, setFormState] = useState({
        title: '',
        comment: '',
        rating: 0
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormState({...formState, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting values', formState);
        console.log('Recipe Id', id, 'User id', user);
    }

    return ( 
        <CommentContainer>
            <h1>Comments </h1>
        {isAuthenticated ? 
         <CommentForm>
        {/* Title */}
            <label>Title:</label>
        <input 
            type="text" 
            name="title"
            value={formState.title}
            onChange={handleChange}
            required
        />
        {/* Rating */}
        <label>Rating:</label>
        <input 
            type="text" 
            name="rating"
            value={formState.rating}
            onChange={handleChange}
            required
        />
        {/* Comment */}
        <label>Review:</label>
        {/* <input 
            type="textbox" 
            name="comment"
            value={formState.comment}
            onChange={handleChange}
            required
        /> */}
        <textarea rows="6" cols="50" name="comment" value={formState.comment} onChange={handleChange}></textarea>
        <button onSubmit={handleSubmit}>Add a comment</button>
            </CommentForm>
    : <h3>Login to post a comment</h3>
    
    }
        </CommentContainer>
     );
}
 
export default Comment;