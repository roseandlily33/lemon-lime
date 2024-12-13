import React from "react";
import PropTypes from "prop-types";
import Modal from "../../../components/modal/Model.component";
import Notification from "../../../components/notification/Notification.component";
import PrimaryButton from "../../../components/buttons/primary-button/PrimaryButton.component";
import { useNavigate } from "react-router-dom";

// prettier-ignore
const DeleteModalConfirmation = ({
  notifiationType = "",
  successMessage = "",
  setIsOpen,
}) => {

  const navigate = useNavigate();
  return (
    <>
      <Modal onClose={() => setIsOpen(false)}>
        <Notification status={notifiationType} messageShown={successMessage} />
        <PrimaryButton
          functionName={() => navigate("/user/home")}
          span="Go Home"
        />
      </Modal>
    </>
  );
};
DeleteModalConfirmation.propTypes = {
  notifiationType: PropTypes.bool,
  successMessage: PropTypes.string,
  setIsOpen: PropTypes.func.isRequired,
};

export default DeleteModalConfirmation;
