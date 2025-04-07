import { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { RatingDiv } from "./rating.styles";
import React from "react";

//name took it out of the props
const Rating = ({ value, onChange }) => {
  const [hoveredRating, setHoveredRating] = useState(value);
  const [currentRating, setCurrentRating] = useState(value);
  const handleClick = useCallback(
    (ratingValue) => {
      if (currentRating === ratingValue) {
        setCurrentRating(0);
      } else {
        setCurrentRating(ratingValue);
      }
    },
    [currentRating]
  );

  useEffect(() => {
    onChange(currentRating);
  }, [currentRating, onChange]);

  return (
    <RatingDiv>
      <p>Current Rating: {currentRating}</p>
      {[...Array(5)].map((_, idx) => {
        const ratingValue = idx + 1;
        return (
          <p
            key={idx}
            className={
              ratingValue <= (hoveredRating || currentRating) ? "selected" : ""
            }
            onMouseEnter={() => setHoveredRating(ratingValue)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => handleClick(ratingValue)}
          >
            &#9733;
          </p>
        );
      })}
    </RatingDiv>
  );
};
Rating.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Rating;
