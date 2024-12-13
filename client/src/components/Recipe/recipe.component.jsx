import {
  RecipeCont,
  TopLabel,
  LeftContainer,
  RightContainer,
} from "./Recipe.styles";
import { formatDate } from "../../formatting-utils/date";
import { NavLink } from "react-router-dom";
import Lemons from "../../images/lemons.jpg";
import { useNavigate } from "react-router-dom";
import CloudImage from "../../photos-cloudinary/photo.component";
import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { fetchSingleRecipe } from "../../redux/singleRecipeSlice";
// import Heart from "../heart/Heart.component";

const RecipeContainer = ({ recipe }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const url = `/recipe/${recipe._id}`;
  // const { isAuthenticated } = useAuth0();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(fetchSingleRecipe(recipe._id));
    navigate(url);
  };

  return (
    <RecipeCont
      key={recipe?._id}
      onClick={handleClick}
      className="boxShadowHover"
    >
      <LeftContainer>
        <TopLabel>
          <NavLink className="link" to={url} onClick={handleClick}>
            {recipe?.recipeName.slice(0, 20)}
          </NavLink>
          {/* {isAuthenticated && <Heart recipe={recipe._id} />} */}
        </TopLabel>
        <p>{formatDate(recipe?.createdAt)}</p>
        <p>
          Total Time: {recipe?.totalTime?.hours}:{recipe?.totalTime?.minutes}
        </p>
        <p>Favorites: {recipe?.favorites}</p>
        <p>{recipe?.subCategory}</p>
      </LeftContainer>
      <RightContainer>
        {recipe?.images[0] ? (
          <CloudImage publicId={recipe?.images[0]?.publicId} />
        ) : (
          <img src={Lemons} alt="lemons" className="recipePhoto" />
        )}
      </RightContainer>
    </RecipeCont>
  );
};

RecipeContainer.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string,
    recipeName: PropTypes.string,
    createdAt: PropTypes.string,
    totalTime: PropTypes.shape({
      hours: PropTypes.number,
      minutes: PropTypes.number,
    }),
    favorites: PropTypes.number,
    subCategory: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        publicId: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default RecipeContainer;
