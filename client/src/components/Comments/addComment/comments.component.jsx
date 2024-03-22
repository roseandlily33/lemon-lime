import { CommentContainer, CommentForm, FormElement } from "./comments.styles";
import { useState } from "react";
import {Form, useParams} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import {httpAddComment} from '../../../hooks/commentRequests';
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
        let totalComment = Object.assign(formState,{
            rating: starRating,
            author: user.sub,
            recipe: id
        });
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
        <hr />
        <h3 style={{marginBlock: '0.5em', marginLeft: '0.6em'}}>Leave a review</h3>
        {isAuthenticated ? 
         <CommentForm onSubmit={handleSubmit}>
        {/* Title */}
        <FormElement>
        <label>Title:</label>
        <input 
            type="text" 
            name="title"
            value={formState.title}
            onChange={handleChange}
            required
        />
        </FormElement>
        {/* Rating */}
        <Rating name="starRating"
            value={starRating}
            onChange={setStarRating} />
        {/* Comment */}
        <FormElement>
        <label>Review:</label>
        <textarea rows="6" cols="50" name="comment" value={formState.comment} onChange={handleChange}></textarea>
        </FormElement>
        <input className="button" type="submit" />
         </CommentForm>
    : <h3>Login to post a comment</h3>
    }
        </CommentContainer>
     );
}
 
export default Comment;