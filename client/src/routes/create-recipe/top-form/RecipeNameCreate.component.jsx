import PropTypes from "prop-types";
import React from "react";

const RecipeNameCreate = ({ formValues, handleChange }) => {
  return (
    <div className="each">
      <label htmlFor="recipeName">
        Recipe Name:
        <span className="required"> *</span>
      </label>
      <input
        type="text"
        name="recipeName"
        value={formValues?.recipeName}
        onChange={handleChange}
        placeholder="Ice Cream Cake"
      />
    </div>
  );
};
RecipeNameCreate.propTypes = {
  formValues: PropTypes.shape({
    recipeName: PropTypes.string,
  }),
  handleChange: PropTypes.func.isRequired,
};

export default RecipeNameCreate;
