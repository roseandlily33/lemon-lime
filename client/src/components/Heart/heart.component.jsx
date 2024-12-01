import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import { httpAddFavoriteRecipe } from "../../hooks/userRequests";
import { httpDeleteFavoriteRecipe } from "../../hooks/userRequests";
import { fetchFavorites } from "../../redux/favoritesSlice";
import FaveHeart from "./favedHeart.component";
import NotFaveHeart from "./notFavedHeart.component";

//Recipe = the id
const Heart = ({ recipe }) => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const [found, setFound] = useState(false);

  useEffect(() => {
    if (recipe && favorites) {
      if (favorites[recipe] === "true") {
        setFound(true);
      } else {
        setFound(false);
      }
    } else {
      setFound(false);
    }
  }, [recipe, favorites]);
  const addFavorite = async (userId, recipeId) => {
    await httpAddFavoriteRecipe(userId, recipeId);
    dispatch(fetchFavorites(user.sub));
    //console.log('Recipe added', adding);
    setFound(true);
  };
  const deleteFavorite = async (userId, recipeId) => {
    await httpDeleteFavoriteRecipe(userId, recipeId);
    dispatch(fetchFavorites(user.sub));
    //console.log('Deleting', deleting);
    setFound(false);
  };

  return (
    <>
      {found ? (
        <>
          <FaveHeart functionName={() => deleteFavorite(user.sub, recipe)} />
        </>
      ) : (
        <>
          <NotFaveHeart functionName={() => addFavorite(user.sub, recipe)} />
        </>
      )}
    </>
  );
};

Heart.propTypes = {
  recipe: PropTypes.string.isRequired,
};

export default Heart;
