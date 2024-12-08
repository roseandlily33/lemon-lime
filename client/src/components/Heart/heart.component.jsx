import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/userSlice";

const Heart = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.user.userFavorites);
  const ifFaved = Object.keys(favorites).includes(recipe);

  const toggleFave = () => {
    if (ifFaved) {
      dispatch(removeFavorite(recipe));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  return (
    <>
      <svg
        onClick={toggleFave}
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-heart"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" className="primaryHeartFaved" />
        <path
          className={`icon icon-heart ${ifFaved ? "secondaryHeartFaved" : "secondaryHeart"}`}
          d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z"
        />
      </svg>
    </>
  );
};

Heart.propTypes = {
  recipe: PropTypes.string.isRequired,
};

export default Heart;
