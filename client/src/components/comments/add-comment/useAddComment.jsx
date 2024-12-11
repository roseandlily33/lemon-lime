import { addComment } from "../../../redux/commentsSlice";
import { addCommentRecipe } from "../../../redux/singleRecipeSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const useAddComment = (singleRecipe, user, formState, starRating) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const addCommentPost = async () => {
    const fullComment = {
      ...formState,
      rating: starRating,
      author: user.sub,
      recipe: id,
      authorName: user.nickname,
      createdAt: new Date(),
      recipeName: singleRecipe.recipeName,
    };
    dispatch(addComment(fullComment));
    dispatch(addCommentRecipe(fullComment));
  };

  return { addCommentPost };
};

export default useAddComment;
