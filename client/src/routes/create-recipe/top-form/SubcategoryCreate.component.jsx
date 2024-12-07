import PropTypes from "prop-types";
import React from "react";

const SubcategoryCreate = ({ formValues, handleChange }) => {
  return (
    <div className="each">
      <label htmlFor={formValues?.subCategory}>
        {" "}
        Subcategory:
        <span className="required"> *</span>
      </label>
      <select
        style={{ width: "100px" }}
        name="subCategory"
        defaultValue={formValues?.subCategory}
        onChange={handleChange}
      >
        <option value={formValues?.subCategory["Breakfast"]}>Breakfast</option>
        <option value={formValues?.subCategory["Lunch"]}>Lunch</option>
        <option value={formValues?.subCategory["Dinner"]}>Dinner</option>
        <option value={formValues?.subCategory["Dessert"]}>Dessert</option>
        <option value={formValues?.subCategory["Drinks"]}>Drinks</option>
      </select>
    </div>
  );
};
SubcategoryCreate.propTypes = {
  formValues: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SubcategoryCreate;
