import React from "react";
import { FormElement } from "./Comments.styles";
import RequiredInput from "../../input-template/required-input/RequiredInput.component";
import Rating from "../../rating-stars/RatingStars.component";
import TextArea from "../../textarea-container/textarea.component";
import PrimaryButton from "../../buttons/primary-button/PrimaryButton.component";
import PropTypes from "prop-types";

const AddCommentForm = ({
  alert,
  formState,
  setFormState,
  starRating,
  setStarRating,
  handleSubmit,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  return (
    <>
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
      <Rating name="starRating" value={starRating} onChange={setStarRating} />
      <FormElement>
        {/* Comment */}
        <TextArea
          label="Review:"
          name="comment"
          value={formState.comment}
          onChange={handleChange}
        />
      </FormElement>
      <p className="success">{alert}</p>
      <PrimaryButton functionName={handleSubmit} span="Create Comment" />
    </>
  );
};
AddCommentForm.propTypes = {
  alert: PropTypes.string,
  formState: PropTypes.shape({
    title: PropTypes.string,
    comment: PropTypes.string,
  }),
  setFormState: PropTypes.func.isRequired,
  starRating: PropTypes.number.isRequired,
  setStarRating: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AddCommentForm;
