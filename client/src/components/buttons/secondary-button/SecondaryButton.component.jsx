import React from "react";
import PropTypes from "prop-types";
import { SecondaryButtonContainer } from "./SecondaryButton.styles";

const SecondaryButton = ({ functionName, span }) => {
  return (
    <SecondaryButtonContainer onClick={functionName}>
      {span}
    </SecondaryButtonContainer>
  );
};
SecondaryButton.propTypes = {
  functionName: PropTypes.func.isRequired,
  span: PropTypes.node.isRequired,
};

export default SecondaryButton;
