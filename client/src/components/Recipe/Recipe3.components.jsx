import { SideContainer, ButtonRecipeContainer } from "./recipe3.styles";
import { formatDate } from "../../formatting-utils/date";
import { NavLink } from "react-router-dom";
import Lemons from "../../images/lemons.jpg";
import { useNavigate } from "react-router-dom";
import CloudImage from "../../photos-cloudinary/photo.component";
import IconButton from "../buttons/icon-button/IconButton.component";
import React from "react";
import PropTypes from "prop-types";
import EditIcon from "../../images/icons/EditIcon.icon";

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
          svg={<EditIcon />}
        />
      </ButtonRecipeContainer>
    </SideContainer>
  );
};

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
  }),
};

export default RecipeContainer3;
