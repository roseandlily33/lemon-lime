import React from "react";
import PropTypes from "prop-types";
import Modal from "../../../components/modal/Model.component";
import Notification from "../../../components/notification/Notification.component";
import PrimaryButton from "../../../components/buttons/primary-button/PrimaryButton.component";

const DeleteModalConfirmation = ({ notifiationType, successMessage }) => {
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
};

export default DeleteModalConfirmation;
