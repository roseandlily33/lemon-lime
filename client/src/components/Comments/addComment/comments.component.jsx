import { CommentContainer, CommentForm } from "./comments.styles";
import { useState } from "react";
import {useParams} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import { httpAddComment } from "../../../hooks/requests";
import Rating from "../../Rating/rating.component";

const Comment = () => {
    const {id} = useParams();
    const { user, isAuthenticated} = useAuth0();
    const [formState, setFormState] = useState({
        title: '',
        comment: '',
    });
    const[starRating, setStarRating] = useState(1);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormState({...formState, [name]: value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('Submititng result')
        let totalComment = Object.assign(formState,{
            rating: starRating,
            author: user.sub,
            recipe: id
        });
        console.log('TOTAL', totalComment);
        let res = await httpAddComment(totalComment);
        if(res.ok){
            alert('Comment has been created')
        } else {
            alert('Comment has not been created');
        }
        setFormState({
            title: '',
            comment: '',
        })
        setStarRating(1)
    }
    
    return ( 
        <CommentContainer>
        <h2>Leave a review</h2>
        {isAuthenticated ? 
         <CommentForm onSubmit={handleSubmit}>
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
        <Rating  name="starRating"
            value={starRating}
            onChange={setStarRating} />
        {/* Comment */}
        <label>Review:</label>
        <textarea rows="6" cols="50" name="comment" value={formState.comment} onChange={handleChange}></textarea>
        <input className="button" type="submit" />
         </CommentForm>
    : <h3>Login to post a comment</h3>
    }
        </CommentContainer>
     );
}
 
export default Comment;