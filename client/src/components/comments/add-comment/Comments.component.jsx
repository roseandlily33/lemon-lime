import { CommentContainer, CommentForm, FormElement } from "./Comments.styles";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { httpAddComment } from "../../../hooks/commentRequests";
import Rating from "../../rating/Rating.component";
import TextArea from "../../textarea/Textarea.component";
import PrimaryButton from "../../buttons/primary-button/PrimaryButton.component";
import RequiredInput from "../../input/required-input/RequiredInput.component";
import RedirectLoginButton from "../../buttons/redirect-login-button/RedirectLogin.component";

const Comment = ({ singleRecipe }) => {
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth0();
  const [formState, setFormState] = useState({
    title: "",
    comment: "",
  });

  const [starRating, setStarRating] = useState(1);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let totalComment = Object.assign(formState, {
      rating: starRating,
      author: user.sub,
      recipe: id,
      authorName: user.nickname,
      recipeName: singleRecipe.recipeName,
    });
    let res = await httpAddComment(totalComment);

    if (res.ok) {
      setSuccess("Comment has been created");
    } else {
      setSuccess("Comment has not been created");
    }
    setFormState({
      title: "",
      comment: "",
    });
    setStarRating(1);
  };

  return (
    <CommentContainer>
      <h4>Leave a review</h4>
      {isAuthenticated ? (
        <CommentForm onSubmit={handleSubmit}>
          {/* Title */}
          <FormElement>
            <RequiredInput
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
          <FormElement>
            {/* Comment */}
            <TextArea
              label="Review:"
              name="comment"
              value={formState.comment}
              onChange={handleChange}
            />
          </FormElement>
          {success && <p>{success}</p>}
          <PrimaryButton
            functionName={(e) => handleSubmit(e)}
            span="Create Comment"
          />
        </CommentForm>
      ) : (
        <FormElement>
          <RedirectLoginButton />
        </FormElement>
      )}
    </CommentContainer>
  );
};
Comment.propTypes = {
  singleRecipe: PropTypes.shape({
    recipeName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
