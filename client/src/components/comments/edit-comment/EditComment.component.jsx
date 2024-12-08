import Rating from "../../rating/Rating.component";
import PropTypes from "prop-types";
import { CommentForm, FormElement } from "../add-comment/Comments.styles";
import React, { useState, useEffect } from "react";
import { CommentDiv } from "../user-comments/UserComments.styles";
import RequiredInput from "../../input/required-input/RequiredInput.component";
import { editComment, clearState } from "../../../redux/commentsSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../loader/Loader.component";

const EditComment = ({ comment }) => {
  const dispatch = useDispatch();
  const [successState, setSuccess] = useState("");
  const [starRating, setStarRating] = useState(comment.rating);
  const [formState, setFormState] = useState({
    title: comment.title,
    comment: comment.comment,
  });
  const { isLoading, error, success, alert } = useSelector(
    (state) => state.comment
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullComment = {
      ...formState,
      rating: starRating,
    };

    dispatch(editComment(comment._id, fullComment));

    dispatch(clearState());
  };

  if (isLoading) {
    return <Loader />;
  }

  useEffect(() => {
    if (success) {
      setSuccess(alert);
    }
    if (error) {
      setSuccess(alert);
    }
  }, []);

  return (
    <>
      <h3>Edit Comment</h3>
      <CommentDiv className="boxShadow">
        <CommentForm onSubmit={handleSubmit}>
          {/* Title */}
          <FormElement>
            <RequiredInput
              style={{ width: "50%" }}
              label="Title:"
              name="title"
              value={formState.title}
              onChange={handleChange}
            />
          </FormElement>
          {/* Rating */}
          <Rating
            name="starRating"
            value={starRating}
            onChange={setStarRating}
          />
          {/* Comment */}
          <FormElement>
            <label>Review:</label>
            <textarea
              rows="6"
              cols="30"
              style={{ width: "50%" }}
              name="comment"
              value={formState.comment}
              onChange={handleChange}
            ></textarea>
          </FormElement>
          <p style={{ color: "hsl(0, 71%, 66%)" }}>{successState}</p>
          <input style={{ width: "150px" }} className="button" type="submit" />
        </CommentForm>
      </CommentDiv>
    </>
  );
};
EditComment.propTypes = {
  comment: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default EditComment;
