import PropTypes from "prop-types";
import React from "react";

const RecipeNameCreate = ({ formValues, handleChange }) => {
  return (
    <div className="each">
      <label>Recipe Name:</label>
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