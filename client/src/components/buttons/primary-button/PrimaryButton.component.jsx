import React from "react";
import PropTypes from "prop-types";

const PrimaryButton = ({ functionName, span }) => {
  return (
    <>
      <button
        style={{ width: "200px" }}
        onClick={functionName}
        className="primary"
      >
        {span}
      </button>
    </>
  );
};
PrimaryButton.propTypes = {
  functionName: PropTypes.func.isRequired,
  span: PropTypes.string.isRequired,
};

export default PrimaryButton;
