import { useParams } from "react-router-dom";
import React, { useState } from "react";
import {
  VisitorContainer,
  LeftContainer,
  RightContainer,
  UsersInfo,
  UsersRecipes,
  UserOptions,
  UserRecipeContainer,
} from "./visitor.styles";
// import {
//   httpGetUserRecipes,
//   httpGetUsersFavoriteRecipes,
// } from "../../hooks/userRequests";
import RecipeContainer from "../../components/Recipe/recipe.component";
import Background from "../../images/Background4.jpg";
import Profile from "../../images/Profile1.jpg";

const VisitorPage = () => {
  const { id } = useParams();

  // Need to dispatch based on the id

  // Then we need to use selector and get the recipes, users name and favorites
  const [showRecipe, setShowRecipe] = useState(true);
  const [showFave, setShowFave] = useState(false);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     let visitingUser = await httpGetUserRecipes(id);
  //     let favorites = await httpGetUsersFavoriteRecipes(id);
  //     setUserRecipes(visitingUser.recipes);
  //     setUserName(visitingUser.name);
  //     setFavorites(favorites.favoriteRecipes);
  //   };
  //   fetchUser();
  // }, [id]);
  let userRecipes;
  let favorites;
  //let id;
  let username;

  const switchTab = () => {
    if (showRecipe === true) {
      setShowRecipe(false);
      setShowFave(true);
    } else {
      setShowFave(false);
      setShowRecipe(true);
    }
  };

  return (
    <VisitorContainer>
      <LeftContainer>
        <img src={Background} alt="Grapefruits, lemons, limes" />
      </LeftContainer>
      <RightContainer>
        <UsersInfo className="boxShadow">
          <img src={Profile} alt="User Profile Avatar" />
          <h2>
            {username}
            {id}
          </h2>
        </UsersInfo>
        <UsersRecipes>
          <UserOptions>
            {/* Apply a condition to what is shown later : <div .trim()} */}
            <h3
              onClick={switchTab}
              className={`${showRecipe ? " selected" : ""}`}
            >
              Recipes
            </h3>
            <h3
              onClick={switchTab}
              className={`${showFave ? " selected" : ""}`}
            >
              Favorites
            </h3>
          </UserOptions>
          <UserRecipeContainer>
            <>
              {showRecipe ? (
                <>
                  {userRecipes?.map((recipe) => {
                    return (
                      <RecipeContainer key={recipe?._id} recipe={recipe} />
                    );
                  })}
                </>
              ) : (
                <>
                  {favorites?.map((recipe) => {
                    return (
                      <RecipeContainer key={recipe?._id} recipe={recipe} />
                    );
                  })}
                </>
              )}
            </>
          </UserRecipeContainer>
        </UsersRecipes>
      </RightContainer>
    </VisitorContainer>
  );
};

export default VisitorPage;
