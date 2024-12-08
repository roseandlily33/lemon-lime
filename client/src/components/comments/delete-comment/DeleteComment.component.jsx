import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Modal from "../../modal/Model.component";
import { useDispatch, useSelector } from "react-redux";
import PrimaryButton from "../../buttons/primary-button/PrimaryButton.component";
import SecondaryButton from "../../buttons/secondary-button/SecondaryButton.component";
import IconButton from "../../buttons/icon-button/IconButton.component";
import { deleteComment } from "../../../redux/commentsSlice";
import Loader from "../../loader/Loader.component";

const DeleteComment = ({ id = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [successState, setSuccess] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, alert, success } = useSelector(
    (state) => state.comments
  );

  const deleteCommentConfirm = () => {
    setIsOpen(true);
  };
  const handleDeleteComment = async (e) => {
    e.preventDefault();
    dispatch(deleteComment({ id: id }));
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
    <>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <p>Are you sure that your would like to delete this comment?</p>
          <PrimaryButton functionName={handleDeleteComment} span="Yes" />
          <SecondaryButton
            functionName={() => navigate("/user/home")}
            span="Go Home"
          />
        </Modal>
      )}
      {success && (
        <Modal onClose={() => setIsOpen(false)}>
          <h3>{successState}</h3>
          <SecondaryButton
            functionName={() => navigate("/user/home")}
            span="Go Home"
          />
        </Modal>
      )}
      <IconButton
        functionName={deleteCommentConfirm}
        span="Delete"
        svg={
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
        }
      />
    </>
  );
};
DeleteComment.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteComment;
