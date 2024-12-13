import { SideContainer } from "./Recipe2.styles";
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
            {recipe?.recipeName.slice(0, 15)}
          </NavLink>
          {/* {isAuthenticated && <Heart recipe={recipe._id} />} */}
        </div>
        <p>{formatDate(recipe?.createdAt)}</p>
        <p>Favorites: {recipe?.favorites}</p>
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
