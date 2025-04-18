import {
  UserCommentsContainer,
  OuterDiv,
  RightCommentsDiv,
  LeftCommentsDiv,
} from "./UserComments.styles";
import SingleComment from "./SingleComment.component";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import CommentsImage from "../../../images/undraw_reviews_lp8w.svg";
import EditComment from "../edit-comment/EditComment.component";

const UserComments = () => {
  const comments = useSelector((state) => state.user.userComments);
  const [editing, setEditing] = useState(false);
  const [editComment, setEditComment] = useState();
  console.log("COMMENTs", comments);
  return (
    <UserCommentsContainer>
      <h2>Your Comments</h2>
      <OuterDiv>
        <LeftCommentsDiv>
          {!comments.length ? (
            <h3 style={{ textAlign: "center" }}>You have no comments</h3>
          ) : (
            <SingleComment
              comments={comments}
              setEditing={setEditing}
              setEditComment={setEditComment}
            />
          )}
        </LeftCommentsDiv>
        <RightCommentsDiv>
          {editing ? (
            <>
              <EditComment comment={editComment} />
            </>
          ) : (
            <img src={CommentsImage} alt="comments illustration" />
          )}
        </RightCommentsDiv>
      </OuterDiv>
    </UserCommentsContainer>
  );
};

export default UserComments;
