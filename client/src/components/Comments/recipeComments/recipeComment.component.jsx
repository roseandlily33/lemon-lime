import { useState, useEffect } from "react";
import Loader from "../../Loader/loader.component";
import { httpGetAllCommentsForRecipe } from "../../../hooks/commentRequests";
import { RecipeCommentsDiv, SingleCommentDiv, SingleTop } from "./recipeComments.styles";
import { formatDate } from "../../../formattingUtils/date";
import { formatStars } from "../../../formattingUtils/stars";

const RecipeComments = ({id, comments}) => {
    // const [comments, setComments] = useState();
    // useEffect(() => {
    //    const fetchComments = async() => {
    //     const res = await httpGetAllCommentsForRecipe(id);
    //     setComments(res);
    //    }
    //    fetchComments();
    // }, [id]);

    return ( 
        <RecipeCommentsDiv>
        {!comments ? <Loader />
        : 
        <>
        {comments.map((c) => {
          return <SingleCommentDiv>
            <SingleTop>
            <h4>{c.title}</h4>
            <div className="underTitleDiv">
            <p>{formatStars(c.rating)}</p>
            <p>{formatDate(c.createdAt)}</p>
            </div>
            </SingleTop>
            <hr />
            <p>{c.comment}</p>
          </SingleCommentDiv>
        })}
         </>
    
    
        }
        </RecipeCommentsDiv>
     );
}
 
export default RecipeComments;