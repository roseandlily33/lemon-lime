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
                <div>
                <h4 style={{fontWeight: 'bold'}}>{c.title}</h4>
                <h4>{c.comment}</h4>
                <h4>{formatStars(c.rating)}</h4>
                <h4>{formatDate(c.createdAt)}</h4>
                </div>
                <DeleteComment id={c._id}/>

            </SingleCommentDiv>
        })
       }
        </>
     );
}
 
export default SingleComment;