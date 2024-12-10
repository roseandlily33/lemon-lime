import { CommentContainer, CommentForm, FormElement } from "./Comments.styles";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Rating from "../../rating/Rating.component";
import TextArea from "../../textarea/Textarea.component";
import PrimaryButton from "../../buttons/primary-button/PrimaryButton.component";
import RequiredInput from "../../input/required-input/RequiredInput.component";
import RedirectLoginButton from "../../buttons/redirect-login-button/RedirectLogin.component";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../redux/commentsSlice";
import Loader from "../../loader/Loader.component";
import { addCommentRecipe } from "../../../redux/singleRecipeSlice";

const Comment = ({ singleRecipe }) => {
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    title: "",
    comment: "",
  });
  const { isLoading, error, alert, success } = useSelector(
    (state) => state.comments
  );
  const [starRating, setStarRating] = useState(1);
  const [successState, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullComment = {
      ...formState,
      rating: starRating,
      author: user.sub,
      recipe: id,
      authorName: user.nickname,
      recipeName: singleRecipe.recipeName,
    };
    dispatch(addComment(fullComment));
    if (!error) {
      dispatch(addCommentRecipe(fullComment));
    }

    setFormState({
      title: "",
      comment: "",
    });
    setStarRating(1);
  };

  useEffect(() => {
    if (success) {
      setSuccess(alert);
    }

    if (error) {
      setSuccess(alert);
    }
  }, [success, error]);

  if (isLoading) {
    return <Loader />;
  }

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
          <p className="success">{successState}</p>
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
