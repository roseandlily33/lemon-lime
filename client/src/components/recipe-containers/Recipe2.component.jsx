import { SideContainer } from "./recipe2.styles";
import { FaRegCalendarAlt, FaRegHeart } from "react-icons/fa";
import { formatDate } from "../../formatting-utils/date";
import { NavLink } from "react-router-dom";
import Lemons from "../../images/lemons.jpg";
import { useNavigate } from "react-router-dom";
import CloudImage from "../../photos-cloudinary/photo.component";
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { fetchSingleRecipe } from "../../redux/singleRecipeSlice";
// import { useAuth0 } from "@auth0/auth0-react";
// import Heart from "../heart/Heart.component";

const RecipeContainer2 = ({ recipe }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { isAuthenticated } = useAuth0();
  const url = `/recipe/${recipe._id}`;

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(fetchSingleRecipe(recipe._id));
    navigate(url);
  };

  return (
    <SideContainer
      key={recipe?._id}
      onClick={handleClick}
      className="boxShadowHover"
    >
      <div className="topDiv">
        <div>
          <NavLink className="link" to={url} onClick={handleClick}>
            <span style={{ fontWeight: 700, fontSize: '1.3rem', color: '#A1AA2D' }}>{recipe?.recipeName.slice(0, 15)}</span>
          </NavLink>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '1.15rem', fontWeight: 600, color: '#444' }}>
          <FaRegCalendarAlt style={{ color: '#E3A445', marginRight: 4 }} />
          <span style={{ fontStyle: 'italic' }}>{formatDate(recipe?.createdAt)}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '1.15rem', fontWeight: 600, color: '#222' }}>
          <FaRegHeart style={{ color: '#D0415A', marginRight: 4 }} />
          <span style={{ fontWeight: 500 }}>Favorites:</span>
          <span style={{ marginLeft: 4 }}>{recipe?.favorites}</span>
        </div>
      </div>
      {recipe?.images[0] ? (
        <CloudImage publicId={recipe?.images[0]?.publicId} />
      ) : (
        <img src={Lemons} alt="lemons" className="recipePhoto" />
      )}
    </SideContainer>
  );
};

RecipeContainer2.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    recipeName: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    favorites: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        publicId: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default RecipeContainer2;
