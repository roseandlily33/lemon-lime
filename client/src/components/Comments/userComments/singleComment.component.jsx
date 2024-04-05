import { SingleCommentDiv } from "./userComments.styles";
import { formatDate } from "../../../formattingUtils/date";
import { formatStars } from "../../../formattingUtils/stars";
import DeleteComment from "../deleteComment/deleteComment.component";
const SingleComment = ({comments}) => {
    return ( 
        <>
       {
        comments.map((c) => {
            return <SingleCommentDiv key={c._id}>
                <h4 style={{fontWeight: 'bold'}}>{c.title}</h4>
                <p>{c.comment}</p>
                <p>{formatStars(c.rating)}</p>
                <p>{formatDate(c.createdAt)}</p>
                <DeleteComment id={c._id}/>
            </SingleCommentDiv>
        })
       }
        </>
     );
}
 
export default SingleComment;