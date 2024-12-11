import React from "react";
import PropTypes from "prop-types";

const CheckIcon = ({ functionName }) => {
  return (
    <svg
      onClick={functionName}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="icon-check"
    >
      <circle cx="12" cy="12" r="10" className="primary" />
      <path
        className="secondary"
        d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
      />
    </svg>
  );
};

CheckIcon.propTypes = {
  functionName: PropTypes.func.isRequired,
};
export default CheckIcon;
