import PropTypes from "prop-types";
import React from "react";

const SubcategoryCreate = ({ formValues, handleChange }) => {
  return (
    <div className="each">
      <label htmlFor="subCategory">
        {" "}
        Subcategory:
        <span className="required"> *</span>
      </label>
      <select
        style={{ width: "100px" }}
        name="subCategory"
        value={formValues?.subCategory}
        onChange={handleChange}
      >
        <option value={"Breakfast"}>Breakfast</option>
        <option value={"Lunch"}>Lunch</option>
        <option value={"Dinner"}>Dinner</option>
        <option value={"Dessert"}>Dessert</option>
        <option value={"Drinks"}>Drinks</option>
      </select>
    </div>
  );
};
SubcategoryCreate.propTypes = {
  formValues: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
};

export default SubcategoryCreate;
