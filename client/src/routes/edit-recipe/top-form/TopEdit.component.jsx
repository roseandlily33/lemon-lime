import RecipeNameCreate from "../../create-recipe/top-form/RecipeNameCreate.component";
import CookTimeCreate from "../../create-recipe/top-form/CookTimeCreate.component";
import PrepTimeCreate from "../../create-recipe/top-form/PrepTimeCreate.component";
import SubcategoryCreate from "../../create-recipe/top-form/SubcategoryCreate.component";
import Description from "../../create-recipe/top-form/Description.component";
import PropTypes from "prop-types";
import React from "react";

const TopEdit = ({ formValues, setFormValues }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
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
  formValues: PropTypes.object,
  setFormValues: PropTypes.func.isRequired,
};

export default TopEdit;
