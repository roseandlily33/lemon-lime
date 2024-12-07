import RecipeNameCreate from "../../create-recipe/top-form/RecipeNameCreate.component";
import CookTimeCreate from "../../create-recipe/top-form/CookTimeCreate.component";
import PrepTimeCreate from "../../create-recipe/top-form/PrepTimeCreate.component";
import SubcategoryCreate from "../../create-recipe/top-form/SubcategoryCreate.component";
import Description from "../../create-recipe/top-form/Description.component";
import PropTypes from "prop-types";
import React from "react";

const TopEdit = ({ formValues, handleChange }) => {
  return (
    <>
      <RecipeNameCreate formValues={formValues} handleChange={handleChange} />
      <CookTimeCreate formValues={formValues} handleChange={handleChange} />
      <PrepTimeCreate formValues={formValues} handleChange={handleChange} />
      <SubcategoryCreate formValues={formValues} handleChange={handleChange} />
      <Description formValues={formValues} handleChange={handleChange} />
    </>
  );
};
TopEdit.propTypes = {
  formValues: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TopEdit;
