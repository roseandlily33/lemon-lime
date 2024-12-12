import PropTypes from "prop-types";
import React from "react";

const CookTimeCreate = ({ formValues, handleChange }) => {
  return (
    <div className="each">
      <label htmlFor="cookTime">
        Cook Time: <span>in minutes</span>
        <span className="required"> *</span>
      </label>
      <select
        name="cookTime"
        value={formValues?.cookTime}
        onChange={handleChange}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={25}>25</option>
        <option value={30}>30</option>
        <option value={35}>35</option>
        <option value={40}>40</option>
        <option value={45}>45</option>
        <option value={50}>50</option>
        <option value={55}>55</option>
        <option value={60}>60</option>
        <option value={65}>65</option>
        <option value={70}>70</option>
      </select>
    </div>
  );
};
CookTimeCreate.propTypes = {
  formValues: PropTypes.shape({
    cookTime: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.number),
    ]),
  }),
  handleChange: PropTypes.func.isRequired,
};

export default CookTimeCreate;
