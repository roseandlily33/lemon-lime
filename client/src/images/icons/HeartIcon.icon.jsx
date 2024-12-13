import React from "react";
import PropTypes from "prop-types";

const HeartIcon = ({ toggleFave, isFaved }) => {
  return (
    <svg
      onClick={toggleFave}
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-heart"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        className={`icon icon-heart ${isFaved ? "primaryHeartFaved" : "primaryHeart"}`}
      />
      <path
        className={`icon icon-heart ${isFaved ? "secondaryHeartFaved" : "secondaryHeart"}`}
        d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z"
      />
    </svg>
  );
};
HeartIcon.propTypes = {
  toggleFave: PropTypes.func.isRequired,
  isFaved: PropTypes.bool.isRequired,
};

export default HeartIcon;
