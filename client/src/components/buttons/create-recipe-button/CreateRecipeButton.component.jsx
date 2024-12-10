import React from "react";
import PropTypes from "prop-types";
import { CreateRecipeButtonContainer } from "./CreateRecipeButton.styles";

const CreateEditRecipeButton = ({ functionName, span }) => {
  return (
    <CreateRecipeButtonContainer>
      <div className="button type--A" onClick={functionName}>
        <div className="button__line"></div>
        <div className="button__line"></div>
        <span className="button__text">{span}</span>
        <div className="button__drow1"></div>
        <div className="button__drow2"></div>
      </div>
    </CreateRecipeButtonContainer>
  );
};
CreateEditRecipeButton.propTypes = {
  functionName: PropTypes.func.isRequired,
  span: PropTypes.string.isRequired,
};

export default CreateEditRecipeButton;
