import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/favoritesSlice";
import { addFavorite, removeFavorite } from "../../redux/userSlice";
import { useAuth0 } from "@auth0/auth0-react";
import HeartIcon from "../../images/icons/HeartIcon.icon";
import { incrementFave, decrementFave } from "../../redux/singleRecipeSlice";
const Heart = ({ recipe }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.user.userFavorites);
  console.log("FAVORITES", favorites, "Recipe", recipe);
  const [isFaved, setIsFaved] = useState(favorites.includes(recipe));
  console.log("IS FAVORITED", isFaved);
  const { user } = useAuth0();

  useEffect(() => {
    setIsFaved(favorites.includes(recipe));
  }, [favorites, recipe]);

  const toggleFave = () => {
    if (isFaved) {
      dispatch(deleteFavorites({ userId: user.sub, recipeId: recipe }));
      dispatch(removeFavorite(recipe));
      dispatch(decrementFave());
    } else {
      dispatch(addFavorites({ userId: user.sub, recipeId: recipe }));
      dispatch(addFavorite(recipe));
      dispatch(incrementFave());
    }
    setIsFaved(!isFaved);
  };

  return (
    <>
      <HeartIcon toggleFave={toggleFave} isFaved={isFaved} />
    </>
  );
};

Heart.propTypes = {
  recipe: PropTypes.string.isRequired,
};

export default Heart;
