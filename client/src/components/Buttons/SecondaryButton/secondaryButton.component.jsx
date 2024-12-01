import React from "react";
import PropTypes from "prop-types";

const SecondaryButton = ({ functionName, span, svg }) => {
  return (
    <button
      className="secondaryButton"
      style={{ display: "flex", alignItems: "center", maxHeight: "60px" }}
      onClick={functionName}
    >
      {svg}
      {span}
    </button>
  );
};
SecondaryButton.propTypes = {
  functionName: PropTypes.func.isRequired,
  span: PropTypes.node.isRequired,
  svg: PropTypes.node.isRequired,
};

export default SecondaryButton;
