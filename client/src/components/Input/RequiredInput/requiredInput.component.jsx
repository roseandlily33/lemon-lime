import PropTypes from "prop-types";
import React from "react";

const RequiredInput = ({ label, name, value, onChange, style }) => {
  return (
    <>
      <label>{label}</label>
      <input
        style={style}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};
RequiredInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default RequiredInput;
