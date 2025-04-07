import { CommentContainer, CommentForm, FormElement } from "./Comments.styles";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";
import RedirectLoginButton from "../../buttons/redirect-login-button/RedirectLogin.component";
import { useSelector } from "react-redux";
import Loader from "../../loader/LoaderIcon.component";
import useAddComment from "./useAddComment";
import AddCommentForm from "./CommentForm.component";

const Comment = ({ singleRecipe }) => {
  const { user, isAuthenticated } = useAuth0();
  const [formState, setFormState] = useState({
    title: "",
    comment: "",
  });
  const [starRating, setStarRating] = useState(1);

  const { isLoading, alert } = useSelector((state) => state.comments);

  const { addCommentPost } = useAddComment(
    singleRecipe,
    user,
    formState,
    starRating
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    addCommentPost();
    setFormState({
      title: "",
      comment: "",
    });
    setStarRating(1);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <CommentContainer>
      <h4>Leave a review</h4>
      {isAuthenticated ? (
        <CommentForm onSubmit={addCommentPost}>
          <AddCommentForm
            formState={formState}
            starRating={starRating}
            setFormState={setFormState}
            setStarRating={setStarRating}
            alert={alert}
            handleSubmit={handleSubmit}
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
  }),
};

export default Comment;
