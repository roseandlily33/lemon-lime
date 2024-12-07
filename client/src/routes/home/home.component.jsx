import RecipeContainer from "../../components/Recipe/recipe.component";
import RecipeContainer2 from "../../components/Recipe/recipe2.container";
import {
  MainDiv,
  BottomDiv,
  LeftMainDiv,
  RightMainDiv,
  HeroImage,
} from "./home.styles";
import React from "react";
import { useSelector } from "react-redux";
import MainPicture from "../../images/Background3.jpg";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/Buttons/PrimaryButton/primaryButton.component";
import Loader from "../../components/Loader/loader.component";

const HomePage = () => {
  const navigate = useNavigate();

  const {
    popularRecipes,
    newestRecipes,
    loadingPopular,
    loadingNewest,
    errorPopular,
    errorNewest,
  } = useSelector((state) => state.recipes);

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
          {errorNewest && <h2>{errorNewest}</h2>}
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
          {errorPopular && <h2>{errorPopular}</h2>}
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
