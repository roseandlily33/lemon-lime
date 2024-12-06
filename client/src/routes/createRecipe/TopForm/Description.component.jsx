import React from "react";
import PropTypes from "prop-types";

// prettier-ignore
const Description = ({ formValues, handleChange }) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', width: '92%'}}>
      <label htmlFor="description">Description:</label>
      <textarea
        type="text"
        name="description"
        value={formValues?.description}
        onChange={handleChange}
        placeholder="Describe your recipe..."
        rows="10"
        cols="45"
      />
    </div>
  );
};
Description.propTypes = {
  formValues: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Description;
