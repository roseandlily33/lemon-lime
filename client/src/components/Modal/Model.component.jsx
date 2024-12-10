import { ModalContainer } from "./Modal.styles";
import React from "react";
import PropTypes from "prop-types";
import SecondaryButton from "../buttons/secondary-button/SecondaryButton.component";

const Modal = ({ children, onClose }) => {
  return (
    <ModalContainer className="boxShadow">
      <div className="modal slit-in-vertical">
        {children}
        <SecondaryButton functionName={onClose} span="Close" />
      </div>
    </ModalContainer>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
