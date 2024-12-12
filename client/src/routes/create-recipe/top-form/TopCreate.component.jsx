import RecipeNameCreate from "./RecipeNameCreate.component";
import CookTimeCreate from "./CookTimeCreate.component";
import PrepTimeCreate from "./PrepTimeCreate.component";
import SubcategoryCreate from "./SubcategoryCreate.component";
import Description from "./Description.component";
import React from "react";
import PropTypes from "prop-types";

const TopCreate = ({ formValues, setFormValues }) => {
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
TopCreate.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func.isRequired,
};

export default TopCreate;
