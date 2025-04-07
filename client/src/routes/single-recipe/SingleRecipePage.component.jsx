import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../../formatting-utils/date";
import Lemon from "../../images/lemons.jpg";
import {
  SingleRecipeContainer,
  TopDiv,
  LeftSide,
  RightSide,
  Bottom,
} from "./singleRecipe.styles";
import Comment from "../../components/comments/add-comment/Comments.component";
import Loader from "../../components/loader/LoaderIcon.component";
import RecipeComments from "../../components/comments/recipe-comments/RecipeComment.component";
import Carousel from "./SingleRecipeCarouselComponent.component";
import Heart from "../../components/heart/HeartIcon.component";
import { NavLink } from "react-router-dom";
import { formatStars } from "../../formatting-utils/stars";
import { useAuth0 } from "@auth0/auth0-react";
import IngredientSection from "./Ingredients/Ingredients.component";
import InstructionSection from "./Instructions/Instructions.component";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleRecipe } from "../../redux/singleRecipeSlice";

// prettier-ignore
const SingleRecipeComponent = () => {
  const { id } = useParams();
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const [recipeLoading, setRecipeLoading] = useState(true);
  const { recipe, comments, author, isLoading, error, averageOfStars } = useSelector(
    (state) => state.singleRecipe
  );

  useEffect(() => {
    dispatch(fetchSingleRecipe(id));
  }, []);

  useEffect(() => {
    if (!recipe) {
      dispatch(fetchSingleRecipe(id));
    }
  }, [recipe, dispatch, id]);

  useEffect(() => {
    if (recipe && !isLoading) {
      setRecipeLoading(false);
    }
  }, [recipe, isLoading]);


  if (isLoading || recipeLoading) {
    return <Loader />;
  }

  if (error) {
    return <h2>An error has occured</h2>;
  }

  return (
    <>
      <SingleRecipeContainer className="boxShadow">
        <TopDiv>
          <LeftSide>
            {recipe?.images[0] ? (
              <Carousel images={recipe?.images} />
            ) : (
              <img src={Lemon} alt="lemons" className="recipePhoto" />
            )}
          </LeftSide>
          <RightSide>
            <h2>{recipe?.recipeName}</h2>
            <div
              style={{ display: "flex", alignItems: "center", gap: "2em" }}
            >
              <span>
                Created by:
                {/*  Implement going to the user page here */}
                {author && (
                  <NavLink className="userLink" to={`/user/${recipe?.author}`}>
                    {" "}
                    {author}{" "}
                  </NavLink>
                )}
                on {formatDate(recipe?.createdAt)}
              </span>
              {isAuthenticated && <Heart recipe={recipe?._id} />}
            </div>
            <>
              {averageOfStars > 0 && <p>{formatStars(averageOfStars)}</p>}
              <p>Cook Time: {recipe?.cookTime}</p>
              <p>Prep Time: {recipe?.prepTime}</p>
              <p>
                Total Time: {recipe?.totalTime?.hours} Hours{" "}
                {recipe?.totalTime?.minutes} Minutes
              </p>
              <p>Sub Category: {recipe?.subCategory}</p>
              <p>Favorites: {recipe?.favorites}</p>
              <p>About this recipe: {recipe?.description}</p>
            </>
          </RightSide>
        </TopDiv>
        <Bottom>
          <IngredientSection singleRecipe={recipe} />
          <InstructionSection singleRecipe={recipe} />
        </Bottom>
        <hr />
        <Comment singleRecipe={recipe} />
        <hr />
        <RecipeComments id={id} comments={comments} />
      </SingleRecipeContainer>
    </>
  );
};

export default SingleRecipeComponent;
