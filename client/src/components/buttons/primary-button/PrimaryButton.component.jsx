import React from "react";
import PropTypes from "prop-types";
import { PrimaryButtonContainer } from "./PrimaryButton.styles";

const PrimaryButton = ({ functionName, span }) => {
  return (
    <>
      <PrimaryButtonContainer onClick={functionName}>
        {span}
      </PrimaryButtonContainer>
    </>
  );
};
PrimaryButton.propTypes = {
  functionName: PropTypes.func.isRequired,
  span: PropTypes.string.isRequired,
};

export default PrimaryButton;
