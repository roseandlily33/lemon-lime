import { ModalContainer } from "./modal.styles";
import React from "react";
import PropTypes from "prop-types";

const Modal = ({ children, onClose }) => {
  return (
    <ModalContainer className="boxShadow">
      <div className="modal slit-in-vertical">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </ModalContainer>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
