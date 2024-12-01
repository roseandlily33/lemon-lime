import RecipeNameCreate from "./RecipeNameCreate.component";
import CookTimeCreate from "./CookTimeCreate.component";
import PrepTimeCreate from "./PrepTimeCreate.component";
import SubcategoryCreate from "./SubcategoryCreate.component";
import React from "react";
import PropTypes from "prop-types";

const TopCreate = ({ formValues, handleChange }) => {
  return (
    <>
      <RecipeNameCreate formValues={formValues} handleChange={handleChange} />
      <CookTimeCreate formValues={formValues} handleChange={handleChange} />
      <PrepTimeCreate formValues={formValues} handleChange={handleChange} />
      <SubcategoryCreate formValues={formValues} handleChange={handleChange} />
    </>
  );
};
TopCreate.propTypes = {
  formValues: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TopCreate;
