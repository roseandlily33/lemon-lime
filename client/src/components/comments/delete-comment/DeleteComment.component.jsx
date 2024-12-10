import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Modal from "../../modal/Model.component";
import { useDispatch, useSelector } from "react-redux";
import SecondaryButton from "../../buttons/secondary-button/SecondaryButton.component";
import { deleteComment } from "../../../redux/commentsSlice";
import Loader from "../../loader/Loader.component";
import DestructiveButton from "../../buttons/destructive-button/DestructiveButton.component";
import Notification from "../../notification/Notification.component";

const DeleteComment = ({ id = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [successState, setSuccess] = useState("");
  const [notificationType, setNotificationType] = useState(null);
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
      setNotificationType(true);
    }

    if (error) {
      setSuccess(alert);
      setNotificationType(false);
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
          <DestructiveButton functionName={handleDeleteComment} span="Yes" />
          <SecondaryButton
            functionName={() => navigate("/user/home")}
            span="Go Home"
          />
        </Modal>
      )}
      {success && (
        <Modal onClose={() => setIsOpen(false)}>
          <Notification success={notificationType} message={successState} />
          <SecondaryButton
            functionName={() => navigate("/user/home")}
            span="Go Home"
          />
        </Modal>
      )}
      <DestructiveButton functionName={deleteCommentConfirm} span="Delete" />
    </>
  );
};
DeleteComment.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteComment;
