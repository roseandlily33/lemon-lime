import React from "react";
import PropTypes from "prop-types";
import Modal from "../../../components/modal/Model.component";
import Notification from "../../../components/notification/Notification.component";
import PrimaryButton from "../../../components/buttons/primary-button/PrimaryButton.component";
import { useNavigate } from "react-router-dom";

const DeleteModalConfirmation = ({
  notifiationType,
  successMessage,
  setIsOpen,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Modal onClose={() => setIsOpen(false)}>
        <Notification success={notifiationType} message={successMessage} />
        <PrimaryButton
          functionName={() => navigate("/user/home")}
          span="Go Home"
        />
      </Modal>
    </>
  );
};
DeleteModalConfirmation.propTypes = {
  notifiationType: PropTypes.bool.isRequired,
  successMessage: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default DeleteModalConfirmation;
