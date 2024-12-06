import React from "react";
import PropTypes from "prop-types";

const RegularInput = ({ label, style, name, value, onChange, placeholder }) => {
  return (
    <>
      <label>{label}</label>
      <input
        style={style}
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

RegularInput.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default RegularInput;
