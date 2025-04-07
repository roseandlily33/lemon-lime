import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  VisitorContainer,
  LeftContainer,
  RightContainer,
  UsersInfo,
  UsersRecipes,
  UserOptions,
  UserRecipeContainer,
} from "./Visitor.styles";
import RecipeContainer from "../../components/recipe-containers/Recipe1.component";
import Background from "../../images/Background4.jpg";
import Profile from "../../images/Profile1.jpg";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader-spinner/LoaderIcon.component";
import {
  fetchUserRecipes,
  fetchUsersFavoriteRecipes,
  //clearState,
} from "../../redux/visitorSlice";

const VisitorPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { visitorRecipes, visitorFavorites, isLoading } = useSelector(
    (state) => state.visitor
  );

  useEffect(() => {
    dispatch(fetchUserRecipes(id));
    dispatch(fetchUsersFavoriteRecipes(id));
  }, [id]);

  // Then we need to use selector and get the recipes, users name and favorites
  const [showRecipe, setShowRecipe] = useState(true);
  const [showFave, setShowFave] = useState(false);

  const switchTab = () => {
    if (showRecipe === true) {
      setShowRecipe(false);
      setShowFave(true);
    } else {
      setShowFave(false);
      setShowRecipe(true);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  // if (error) {
  //   return <h2>There has been an error</h2>;
  // }

  return (
    <VisitorContainer>
      <LeftContainer>
        <img src={Background} alt="Grapefruits, lemons, limes" />
      </LeftContainer>
      <RightContainer>
        <UsersInfo className="boxShadow">
          <img src={Profile} alt="User Profile Avatar" />
          <h2>
            {/* {username} */}
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
                  {visitorRecipes?.map((recipe) => {
                    return (
                      <RecipeContainer key={recipe?._id} recipe={recipe} />
                    );
                  })}
                </>
              ) : (
                <>
                  {visitorFavorites?.map((recipe) => {
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
