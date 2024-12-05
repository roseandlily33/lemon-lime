import React from "react";
import PropTypes from "prop-types";

const IconButton = ({ functionName, span, svg }) => {
  return (
    <>
      <button onClick={functionName} className="buttonWithIcon">
        {svg}
        {span}
      </button>
    </>
  );
};
IconButton.propTypes = {
  functionName: PropTypes.func.isRequired,
  span: PropTypes.node,
  svg: PropTypes.node,
};

export default IconButton;
