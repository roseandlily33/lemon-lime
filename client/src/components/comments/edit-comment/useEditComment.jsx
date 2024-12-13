import { useDispatch } from "react-redux";
import { editComment } from "../../../redux/commentsSlice";
import { updateComment } from "../../../redux/userSlice";

// prettier-ignore
const useEditComment = (comment, formState, starRating, clearState) => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullComment = {
      ...comment,
      ...formState,
      rating: starRating,
    };
    dispatch(editComment({ id: fullComment._id, comment: fullComment }));
    dispatch(updateComment(fullComment));
    clearState();
  };

  return { handleSubmit };
};

export default useEditComment;
