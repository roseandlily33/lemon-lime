import Rating from "../../Rating/Rating.component";
import { CommentForm, FormElement } from "../addComment/Comments.styles";
import { useState } from "react";
import { CommentDiv } from "../userComments/UserComments.styles";
import { httpEditComment } from "../../../hooks/commentRequests";
import RequiredInput from "../../Input/RequiredInput/RequiredInput.component";

const EditComment = ({ comment }) => {
  const [success, setSuccess] = useState("");
  const [starRating, setStarRating] = useState(comment.rating);
  const [formState, setFormState] = useState({
    title: comment.title,
    comment: comment.comment,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let totalComment = Object.assign(formState, {
      rating: starRating,
    });
    let res = await httpEditComment(comment._id, totalComment);

    if (res.ok) {
      setSuccess("Comment has been edited");
    } else {
      setSuccess("Comment has not been edited");
    }
  };

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
          <p style={{ color: "hsl(0, 71%, 66%)" }}>{success}</p>
          <input style={{ width: "150px" }} className="button" type="submit" />
        </CommentForm>
      </CommentDiv>
    </>
  );
};

export default EditComment;
