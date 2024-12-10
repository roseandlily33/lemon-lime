import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/favoritesSlice";
import { useAuth0 } from "@auth0/auth0-react";

const Heart = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.user.userFavorites);
  const [isFaved, setIsFaved] = useState(
    Object.keys(favorites).includes(recipe)
  );
  const { user } = useAuth0();

  useEffect(() => {
    setIsFaved(Object.keys(favorites).includes(recipe));
  }, [favorites, recipe]);

  const toggleFave = () => {
    if (isFaved) {
      dispatch(deleteFavorites({ userId: user.sub, recipeId: recipe }));
    } else {
      dispatch(addFavorites({ userId: user.sub, recipeId: recipe }));
    }
    setIsFaved(!isFaved);
  };

  return (
    <>
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
    </>
  );
};

Heart.propTypes = {
  recipe: PropTypes.string.isRequired,
};

export default Heart;
