import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/favoritesSlice";
import { useAuth0 } from "@auth0/auth0-react";
import HeartIcon from "../../images/icons/HeartIcon.icon";

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
      <HeartIcon toggleFave={toggleFave} isFaved={isFaved} />
    </>
  );
};

Heart.propTypes = {
  recipe: PropTypes.string.isRequired,
};

export default Heart;
