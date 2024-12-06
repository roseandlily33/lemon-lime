import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { httpDeleteComment } from "../../../hooks/commentRequests";
import React, { useState } from "react";
import Modal from "../../modal/Model.component";
import { useDispatch } from "react-redux";
import { fetchUserComments } from "../../../redux/userCommentsSlice";
import { useAuth0 } from "@auth0/auth0-react";

const DeleteComment = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAuth0();

  const deleteCommentConfirm = () => {
    setIsOpen(true);
  };
  const deleteComment = async () => {
    let res = await httpDeleteComment(id);
    if (res.ok) {
      setSuccess("Comment has been deleted");
    } else {
      setSuccess("Comment has not been deleted");
    }
    dispatch(fetchUserComments(user.sub));
  };

  return (
    <>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <p>Are you sure that your would like to delete this comment?</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              deleteComment();
            }}
          >
            Yes
          </button>
          {success && <h3>{success}</h3>}
          <button onClick={() => navigate("/user/home")}>Go Home</button>
        </Modal>
      )}
      <button
        className="secondaryButton buttonWithIcon"
        onClick={deleteCommentConfirm}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-trash"
          viewBox="0 0 24 24"
        >
          <path
            className="primary"
            d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"
          />
          <path
            className="secondary"
            d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"
          />
        </svg>
        Delete
      </button>
    </>
  );
};
DeleteComment.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteComment;
