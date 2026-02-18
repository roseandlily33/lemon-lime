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
import { FaRegCalendarAlt, FaRegHeart } from "react-icons/fa";

const RecipeContainer3 = ({ recipe }) => {
  const navigate = useNavigate();
  const recipeUrl = `/recipe/${recipe._id}`;
  const editUrl = `/user/edit/${recipe._id}`;

  return (
    <SideContainer key={recipe?._id} className="boxShadowHover">
      <NavLink className="link" to={recipeUrl}>
        <span style={{ fontWeight: 700, fontSize: '1.3rem', color: '#A1AA2D' }}>{recipe?.recipeName.slice(0, 15)}</span>
      </NavLink>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '1.15rem', fontWeight: 600, color: '#444' }}>
        <FaRegCalendarAlt style={{ color: '#E3A445', marginRight: 4 }} />
        <span style={{ fontStyle: 'italic' }}>{formatDate(recipe?.createdAt)}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '1.15rem', fontWeight: 600, color: '#222' }}>
        <FaRegHeart style={{ color: '#D0415A', marginRight: 4 }} />
        <span style={{ fontWeight: 500 }}>Favorites:</span>
        <span style={{ marginLeft: 4 }}>{recipe?.favorites}</span>
      </div>
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
