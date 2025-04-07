import Rating from "../../rating-stars/RatingStars.component";
import PropTypes from "prop-types";
import { CommentForm, FormElement } from "../add-comment/Comments.styles";
import React, { useState, useEffect } from "react";
import { CommentDiv } from "../user-comments/UserComments.styles";
import RequiredInput from "../../input-template/required-input/RequiredInput.component";
import { useSelector } from "react-redux";
import PrimaryButton from "../../buttons/primary-button/PrimaryButton.component";
import Notification from "../../notification/Notification.component";
import useNotification from "../../../utils/useNotification";
import useEditComment from "./useEditComment";

// prettier-ignore
const EditComment = ({ comment }) => {

  const [starRating, setStarRating] = useState(comment.rating);
  const [formState, setFormState] = useState({
    title: comment.title,
    comment: comment.comment,
  });

  useEffect(() => {
    setStarRating(comment.rating);
    setFormState({
      title: comment.title,
      comment: comment.comment,
    });
  }, [comment]);

  const clearState = () => {
    setFormState({
      title: "",
      comment: "",
    });
    setStarRating(1);
  }

  const { isLoading, error, alert } = useSelector(
    (state) => state.comments
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const { handleSubmit } = useEditComment(comment, formState, starRating, clearState);

  const { notificationType, successMessage } = useNotification(error, alert);

  return (
    <>
      <h3>Edit Comment</h3>
      <CommentDiv className="boxShadow">
        <CommentForm>
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
          <Notification status={notificationType} messageShown={successMessage} />
          {isLoading ? <h3>Editing...</h3> : <PrimaryButton functionName={handleSubmit} span="Edit Comment" />}
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
