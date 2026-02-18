import {
  RecipeCont,
  TopLabel,
  LeftContainer,
  RightContainer,
  InfoRow,
  IconText,
  CategoryTag,
} from "./recipe.styles";
import {
  FaRegClock,
  FaRegHeart,
  FaRegCalendarAlt,
  FaTag,
} from "react-icons/fa";
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
            <span
              style={{ fontWeight: 700, fontSize: "1.5rem", color: "#A1AA2D" }}
            >
              {recipe?.recipeName.slice(0, 20)}
            </span>
          </NavLink>
        </TopLabel>
        <InfoRow>
          <IconText style={{ fontWeight: 600 }}>
            <FaRegCalendarAlt style={{ color: "#E3A445", marginRight: 4 }} />
            <span style={{ fontStyle: "italic" }}>
              {formatDate(recipe?.createdAt)}
            </span>
          </IconText>
        </InfoRow>
        <InfoRow>
          <IconText style={{ fontWeight: 600 }}>
            <FaRegClock style={{ color: "#BCC456", marginRight: 4 }} />
            <span style={{ fontWeight: 500 }}>Total Time:</span>
            <span style={{ marginLeft: 4 }}>
              {recipe?.totalTime?.hours ?? 0}:
              {recipe?.totalTime?.minutes?.toString().padStart(2, "0") ?? "00"}
            </span>
          </IconText>
        </InfoRow>
        <InfoRow>
          <IconText style={{ fontWeight: 600 }}>
            <FaRegHeart style={{ color: "#D0415A", marginRight: 4 }} />
            <span style={{ fontWeight: 500 }}>Favorites:</span>
            <span style={{ marginLeft: 4 }}>{recipe?.favorites}</span>
          </IconText>
        </InfoRow>
        <InfoRow>
          <CategoryTag>
            <FaTag style={{ marginRight: 4 }} />
            {recipe?.subCategory}
          </CategoryTag>
        </InfoRow>
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
      }),
    ),
  }),
};

export default RecipeContainer;
