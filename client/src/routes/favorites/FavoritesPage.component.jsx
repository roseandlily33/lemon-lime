import {
  FavoritesContainerMain,
  FavoritesRecipesDiv,
} from "./favorites.styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../components/loader/LoaderIcon.component";
import React from "react";
import RecipeContainer2 from "../../components/recipe/Recipe2.component";

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
