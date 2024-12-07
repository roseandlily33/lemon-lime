import React from "react";
import PropTypes from "prop-types";

const SecondaryButton = ({ functionName, span }) => {
  return (
    <button className="secondaryButton" onClick={functionName}>
      {span}
    </button>
  );
};
SecondaryButton.propTypes = {
  functionName: PropTypes.func.isRequired,
  span: PropTypes.node.isRequired,
};

export default SecondaryButton;
