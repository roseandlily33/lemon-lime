import { CommentContainer, CommentForm, FormElement } from "./comments.styles";
import { useState } from "react";
import {useParams, Link} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import {httpAddComment} from '../../../hooks/commentRequests';
import Rating from "../../Rating/rating.component";


const Comment = ({singleRecipe}) => {
    const {id} = useParams();
    const { user, isAuthenticated, loginWithRedirect} = useAuth0();
    const [formState, setFormState] = useState({
        title: '',
        comment: '',
    });

    // 

    const[starRating, setStarRating] = useState(1);
    const[success, setSuccess] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormState({...formState, [name]: value});    
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        let totalComment = Object.assign(formState,{
            rating: starRating,
            author: user.sub,
            recipe: id,
            authorName: user.nickname,
            recipeName: singleRecipe.recipeName
        });
        let res = await httpAddComment(totalComment);
        
        if(res.ok){
            setSuccess('Comment has been created')
        } else {
            setSuccess('Comment has not been created')
        }
        setFormState({
            title: '',
            comment: '',
        })
        setStarRating(1);
    }
    
    return ( 
        <CommentContainer>
        <h4>Leave a review</h4>
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
        <textarea rows="6" cols="30" name="comment" value={formState.comment} onChange={handleChange}></textarea>
        </FormElement>
        <p>{success}</p>
        <button style={{width: '200px'}} onClick={(e) => handleSubmit(e)}>Create Comment</button>
         </CommentForm>
    : 
    <FormElement>
        <p><span style={{fontStyle: 'normal', color: 'orange'}} onClick={() => loginWithRedirect()}>Login</span> to post a comment</p>
    </FormElement>
    }
        </CommentContainer>
     );
}
 
export default Comment;