import RecipeNameCreate from "../../createRecipe/TopForm/RecipeNameCreate.component";
import CookTimeCreate from "../../createRecipe/TopForm/CookTimeCreate.component";
import PrepTimeCreate from "../../createRecipe/TopForm/PrepTimeCreate.component";
import SubcategoryCreate from "../../createRecipe/TopForm/SubcategoryCreate.component";
import PropTypes from "prop-types";
import React from "react";

const TopEdit = ({ formValues, handleChange }) => {
  return (
    <>
      <RecipeNameCreate formValues={formValues} handleChange={handleChange} />
      <CookTimeCreate formValues={formValues} handleChange={handleChange} />
      <PrepTimeCreate formValues={formValues} handleChange={handleChange} />
      <SubcategoryCreate formValues={formValues} handleChange={handleChange} />
    </>
  );
};
TopEdit.propTypes = {
  formValues: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TopEdit;
