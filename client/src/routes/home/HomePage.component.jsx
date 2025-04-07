import RecipeContainer from "../../components/recipe-containers/Recipe1.component";
import RecipeContainer2 from "../../components/recipe-containers/Recipe2.component";
import {
  MainDiv,
  BottomDiv,
  LeftMainDiv,
  RightMainDiv,
  HeroImage,
} from "./home.styles";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainPicture from "../../images/Background3.jpg";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton.component";
import Loader from "../../components/loader-spinner/LoaderIcon.component";
import { fetchRecent } from "../../redux/recipeSlice";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    popularRecipes,
    newestRecipes,
    loadingPopular,
    loadingNewest,
    errorPopular,
    errorNewest,
  } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecent());
  }, []);

  return (
    <MainDiv>
      <HeroImage>
        <div className="overlay">
          <img src={MainPicture} alt="Main Lemons" />
        </div>
        <div className="text">
          <h2>Discover your new</h2>
          <br />
          <h2 style={{ color: "#D0415A" }}>Favorite Recipes</h2>
          <PrimaryButton
            functionName={() => navigate("search")}
            span="Find Recipes"
          />
        </div>
      </HeroImage>
      <BottomDiv>
        <LeftMainDiv className="scrollBar">
          <h2>New Recipes</h2>
          {errorNewest && <h2 className="error">{errorNewest}</h2>}
          {loadingNewest ? (
            <Loader />
          ) : (
            <>
              {newestRecipes?.map((recipe) => {
                return <RecipeContainer key={recipe?._id} recipe={recipe} />;
              })}
            </>
          )}
        </LeftMainDiv>
        <RightMainDiv className="scrollBar">
          <h2>Popular Recipes</h2>
          {errorPopular && <h2 className="error">{errorPopular}</h2>}
          {loadingPopular ? (
            <Loader />
          ) : (
            <>
              {popularRecipes?.map((recipe) => {
                return <RecipeContainer2 key={recipe?._id} recipe={recipe} />;
              })}
            </>
          )}
        </RightMainDiv>
      </BottomDiv>
    </MainDiv>
  );
};

export default HomePage;
