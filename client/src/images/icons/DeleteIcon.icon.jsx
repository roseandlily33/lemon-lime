import React from "react";
import PropTypes from "prop-types";

const DeleteIcon = ({ functionName }) => {
  return (
    <svg
      onClick={functionName}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="icon icon-trash"
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
  );
};

DeleteIcon.propTypes = {
  functionName: PropTypes.func.isRequired,
};

export default DeleteIcon;
