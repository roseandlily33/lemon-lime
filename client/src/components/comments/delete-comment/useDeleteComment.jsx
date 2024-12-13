import { useDispatch } from "react-redux";
import { deleteComment, clearState } from "../../../redux/commentsSlice";
import { deleteCommentFromUser } from "../../../redux/userSlice";

const useDeleteComment = (id) => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(deleteComment({ id: id }));
    dispatch(deleteCommentFromUser(id));
    dispatch(clearState());
  };

  return { handleSubmit };
};

export default useDeleteComment;
