import { CommentContainer, CommentForm, FormElement } from "./comments.styles";
import { useState } from "react";
import {useParams} from 'react-router-dom';
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
            recipe: id
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
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
    
    return ( 
        <CommentContainer className="boxShadow">
        <h3 style={{marginBlock: '0.5em', marginLeft: '0.6em', color: 'hsl(79, 25%, 35%)'}}>Leave a review</h3>
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
        <input style={{width: '150px'}} className="button" type="submit" />
         </CommentForm>
    : 
    <FormElement>
        <h3>Login to post a comment</h3>
    </FormElement>
    }
        </CommentContainer>
     );
}
 
export default Comment;