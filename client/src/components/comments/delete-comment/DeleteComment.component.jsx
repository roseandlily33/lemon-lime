import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Modal from "../../modal-popup/Model.component";
import { useSelector } from "react-redux";
import SecondaryButton from "../../buttons/secondary-button/SecondaryButton.component";
import DestructiveButton from "../../buttons/destructive-button/DestructiveButton.component";
import Notification from "../../notification/Notification.component";
import useNotification from "../../../utils/useNotification";
import useDeleteComment from "./useDeleteComment";

const DeleteComment = ({ id = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoading, error, alert } = useSelector((state) => state.comments);
  console.log("Error and alert", error, alert);
  const deleteCommentConfirm = () => {
    setIsOpen(true);
  };

  const { notificationType, successState } = useNotification(error, alert);
  console.log(
    "DeleteComment -> notificationType",
    notificationType,
    successState
  );

  const { handleSubmit } = useDeleteComment(id);

  return (
    <>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          {successState ? (
            <Notification
              notificationType={notificationType}
              successState={successState}
            />
          ) : (
            <>
              <p>Are you sure that your would like to delete this comment?</p>
              {isLoading ? (
                <h3>Deleting...</h3>
              ) : (
                <DestructiveButton functionName={handleSubmit} span="Yes" />
              )}
            </>
          )}
          <SecondaryButton
            functionName={() => navigate("/user/home")}
            span="Go Home"
          />
        </Modal>
      )}
      {/* {successState && (
        <Modal onClose={() => setIsOpen(false)}>
          
          <SecondaryButton
            functionName={() => navigate("/user/home")}
            span="Go Home"
          />
        </Modal>
      )} */}
      <DestructiveButton functionName={deleteCommentConfirm} span="Delete" />
    </>
  );
};
DeleteComment.propTypes = {
  id: PropTypes.string,
};

export default DeleteComment;
