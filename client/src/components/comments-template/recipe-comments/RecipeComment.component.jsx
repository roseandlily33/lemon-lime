import Loader from "../../loader-spinner/LoaderIcon.component";
import PropTypes from "prop-types";
import React from "react";
import {
  RecipeCommentsDiv,
  SingleCommentDiv,
  SingleTop,
} from "./RecipeComments.styles";
import { formatDate } from "../../../formatting-utils/date";
import { formatStars } from "../../../formatting-utils/stars";

const RecipeComments = ({ comments = [] }) => {
  return (
    <RecipeCommentsDiv className="scrollBar">
      {!comments ? (
        <Loader />
      ) : (
        <>
          {comments?.map((c) => {
            return (
              <SingleCommentDiv key={c?._id}>
                <SingleTop>
                  <h4>{c?.title}</h4>
                  <div className="underTitleDiv">
                    <p>{formatStars(c?.rating)}</p>
                    <p>{formatDate(c?.createdAt)}</p>
                    <p>{c?.authorName}</p>
                  </div>
                </SingleTop>
                <hr />
                <p>{c?.comment}</p>
              </SingleCommentDiv>
            );
          })}
        </>
      )}
    </RecipeCommentsDiv>
  );
};
RecipeComments.propTypes = {
  id: PropTypes.string,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
      rating: PropTypes.number,
      createdAt: PropTypes.string,
      authorName: PropTypes.string,
      comment: PropTypes.string,
    })
  ),
};

export default RecipeComments;
