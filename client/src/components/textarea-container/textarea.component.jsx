import PropTypes from "prop-types";
import React from "react";

const TextArea = ({ label, name, value, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <textarea
        rows="6"
        cols="30"
        name={name}
        value={value}
        onChange={onChange}
      ></textarea>
    </>
  );
};
TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
