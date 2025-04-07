import { DestructiveButtonContainer } from "./DestructiveButton.styles";
import React from "react";
import PropTypes from "prop-types";

const DestructiveButton = ({ functionName, span }) => {
  return (
    <>
      <DestructiveButtonContainer onClick={functionName}>
        {span}
      </DestructiveButtonContainer>
    </>
  );
};
DestructiveButton.propTypes = {
  functionName: PropTypes.func.isRequired,
  span: PropTypes.string.isRequired,
};

export default DestructiveButton;
