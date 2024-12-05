<<<<<<< HEAD
import { SideContainer, ButtonRecipeContainer } from "./Recipe3.styles";
=======
import { SideContainer, ButtonRecipeContainer } from "./recipe3.styles";
>>>>>>> 2ca9627cd0f3c041bb6cc57de20a972a03879123
import { formatDate } from "../../formattingUtils/date";
import { NavLink } from "react-router-dom";
import Lemons from "../../images/lemons.jpg";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import CloudImage from "../../Photos/Photo.component";
=======
import CloudImage from "../../Photos/photo.component";
>>>>>>> 2ca9627cd0f3c041bb6cc57de20a972a03879123
import IconButton from "../Buttons/IconButton/IconButton.component";
import React from "react";
import PropTypes from "prop-types";

const RecipeContainer3 = ({ recipe }) => {
  const navigate = useNavigate();
  const recipeUrl = `/recipe/${recipe._id}`;
  const editUrl = `/user/edit/${recipe._id}`;

  return (
    <SideContainer key={recipe?._id} className="boxShadowHover">
      <NavLink className="link" to={recipeUrl}>
        {recipe?.recipeName.slice(0, 15)}
      </NavLink>
      <p>{formatDate(recipe?.createdAt)}</p>
      <p>Favorites: {recipe?.favorites}</p>
      {recipe?.images[0] ? (
        <CloudImage publicId={recipe?.images[0]?.publicId} />
      ) : (
        <img src={Lemons} alt="lemons" className="recipePhoto" />
      )}
      <ButtonRecipeContainer>
        <IconButton
          functionName={() => navigate(editUrl)}
          span="Edit"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="30px"
              width="30px"
              className="icon-edit"
            >
              <path
                className="primary"
                d="M4 14a1 1 0 0 1 .3-.7l11-11a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-11 11a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-3z"
              />
              <rect
                width="20"
                height="2"
                x="2"
                y="20"
<<<<<<< HEAD
                class="secondary"
=======
                className="secondary"
>>>>>>> 2ca9627cd0f3c041bb6cc57de20a972a03879123
                rx="1"
              />
            </svg>
          }
        />
      </ButtonRecipeContainer>
    </SideContainer>
  );
};

<<<<<<< HEAD
=======
RecipeContainer3.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    recipeName: PropTypes.string,
    createdAt: PropTypes.string,
    favorites: PropTypes.number,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        publicId: PropTypes.string,
      })
    ),
  }).isRequired,
};

>>>>>>> 2ca9627cd0f3c041bb6cc57de20a972a03879123
export default RecipeContainer3;
