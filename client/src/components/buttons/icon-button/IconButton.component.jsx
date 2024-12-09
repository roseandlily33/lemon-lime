import React from "react";
import PropTypes from "prop-types";
import { PrimaryButtonContainer } from "../primary-button/PrimaryButton.styles";

const IconButton = ({ functionName, span, svg }) => {
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: "0.5rem",
    padding: "0",
    paddingBlock: "0.3rem",
    paddingInline: "0.5rem",
  };

  return (
    <>
      <PrimaryButtonContainer
        style={styles}
        onClick={functionName}
        className="buttonWithIcon"
      >
        {svg}
        {span}
      </PrimaryButtonContainer>
    </>
  );
};
IconButton.propTypes = {
  functionName: PropTypes.func.isRequired,
  span: PropTypes.node,
  svg: PropTypes.node,
};

export default IconButton;
