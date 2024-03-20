import { useState, useEffect } from "react";
import Loader from "../../Loader/loader.component";
import { httpGetAllCommentsForRecipe } from "../../../hooks/commentRequests";
import { RecipeCommentsDiv, SingleCommentDiv, SingleTop } from "./recipeComments.styles";
import { formatDate } from "../../../formattingUtils/date";
import { formatStars } from "../../../formattingUtils/stars";

const RecipeComments = ({id}) => {
    const [comments, setComments] = useState();
    useEffect(() => {
       const fetchComments = async() => {
        const res = await httpGetAllCommentsForRecipe(id);
        setComments(res);
       }
       fetchComments();
    }, [id]);


    return ( 
        <RecipeCommentsDiv>
        {!comments ? <Loader />
        : 
        <>
        {comments.map((c) => {
          return <SingleCommentDiv>
            <SingleTop>
            <h3>{c.title}</h3>
            <h3>{formatStars(c.rating)}</h3>
            <h4>{formatDate(c.createdAt)}</h4>
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