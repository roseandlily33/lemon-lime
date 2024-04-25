import Rating from "../../Rating/rating.component";
import { CommentForm, FormElement  } from "../addComment/comments.styles";
import { useState } from "react";
import { CommentDiv } from "../userComments/userComments.styles";

const EditComment = ({comment}) => {
    console.log('Edit Comment', comment);
    const [success, setSuccess] = useState('');
    const[starRating, setStarRating] = useState(comment.rating);
    const [formState, setFormState] = useState({
        title: comment.title,
        comment: comment.comment
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormState({...formState, [name]: value});    
    }
    const handleSubmit = () => {

    }
    console.log('Current state of form', starRating, formState)
    return ( 
        <>
        <h3>Edit Comment</h3>
        <CommentDiv>
         <CommentForm onSubmit={handleSubmit}>
        {/* Title */}
        <FormElement>
        <label>Title:</label>
        <input 
          style={{width: '50%'}}
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
        <textarea rows="6" cols="30" style={{width: '50%'}} name="comment" value={formState.comment} onChange={handleChange}></textarea>
        </FormElement>
        <p>{success}</p>
        <input style={{width: '150px'}} className="button" type="submit" />
         </CommentForm>
        </CommentDiv>
        </>
    );
}
 
export default EditComment;