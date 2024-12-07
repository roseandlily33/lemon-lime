import { SingleCommentDiv } from "./UserComments.styles";
import PropTypes from "prop-types";
import { formatDate } from "../../../formatting-utils/date";
import { formatStars } from "../../../formatting-utils/stars";
import DeleteComment from "../delete-comment/DeleteComment.component";
import React from "react";
import PrimaryButton from "../../buttons/primary-button/PrimaryButton.component";

const SingleComment = ({ comments, setEditing, setEditComment }) => {
  //console.log('Each comment', comments)
  return (
    <>
      {comments?.map((c) => {
        <SingleCommentDiv key={c?._id} className="boxShadow">
          <h4 style={{ fontWeight: "bold" }}>{c?.title}</h4>
          <div style={{ display: "flex", gap: "1rem" }}>
            <p style={{ textTransform: "capitalize" }}>
              Recipe: {c?.recipeName}
            </p>
            <p>{formatStars(c?.rating)}</p>
            <p>{formatDate(c?.createdAt)}</p>
          </div>
          <hr />
          <p>{c.comment}</p>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              marginTop: "1rem",
              justifyContent: "end",
            }}
          >
            <PrimaryButton
              functionName={() => {
                setEditing(true);
                setEditComment(c);
              }}
              span="Edit"
            />
            <DeleteComment id={c?._id} />
          </div>
        </SingleCommentDiv>;
      })}
    </>
  );
};

SingleComment.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
      recipeName: PropTypes.string,
      rating: PropTypes.number,
      createdAt: PropTypes.string,
      comment: PropTypes.string,
    })
  ).isRequired,
  setEditing: PropTypes.func.isRequired,
  setEditComment: PropTypes.func.isRequired,
};

export default SingleComment;
