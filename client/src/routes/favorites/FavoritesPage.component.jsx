import {
  FavoritesContainerMain,
  FavoritesRecipesDiv,
} from "./Favorites.styles";
import RecipeContainer2 from "../../components/recipe/recipe2.container";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader.component";
import React from "react";

const FavoritesPage = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const { favorites, favoriteRecipes } = useSelector(
    (state) => state.favorites
  );
  if (!isAuthenticated) {
    navigate("/");
  }

  return (
    <FavoritesContainerMain>
      <h1>Your Favorite Recipes</h1>
      <FavoritesRecipesDiv className="scrollBar">
        {!favorites ? (
          <Loader />
        ) : (
          <>
            {favoriteRecipes?.map((recipe) => {
              return <RecipeContainer2 key={recipe._id} recipe={recipe} />;
            })}
          </>
        )}
      </FavoritesRecipesDiv>
    </FavoritesContainerMain>
  );
};

export default FavoritesPage;
