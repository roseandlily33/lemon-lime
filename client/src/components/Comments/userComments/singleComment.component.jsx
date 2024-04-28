import { SingleCommentDiv } from "./userComments.styles";
import { formatDate } from "../../../formattingUtils/date";
import { formatStars } from "../../../formattingUtils/stars";
import DeleteComment from "../deleteComment/deleteComment.component";

const SingleComment = ({comments, setEditing, setEditComment}) => {
    //console.log('Each comment', comments)
    return ( 
        <>
       {
        comments.map((c) => {
            return <SingleCommentDiv key={c._id} className="boxShadow">
                <h4 style={{fontWeight: 'bold'}}>{c.title}</h4>
                <div style={{display: 'flex', gap: '1rem'}}>
                <p style={{textTransform: 'capitalize'}}>Recipe: {c?.recipeName}</p>
                <p>{formatStars(c.rating)}</p>
                <p>{formatDate(c.createdAt)}</p>
                
                </div>
                <hr /> 
                <p>{c.comment}</p>
                <div style={{display: 'flex', gap: '2rem', marginTop: '1rem', justifyContent: 'end'}}>
                <button onClick={() => {
                    setEditing(true);
                    setEditComment(c);
                }} className="primary">Edit</button>
                <DeleteComment id={c._id}/>
                </div>
                
            </SingleCommentDiv>
        })
       }
        </>
     );
}
 
export default SingleComment;