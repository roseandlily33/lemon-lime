import React from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../../formattingUtils/date";
import Lemon from "../../images/lemons.jpg";
import {
  SingleRecipeContainer,
  TopDiv,
  LeftSide,
  RightSide,
  Bottom,
} from "./singleRecipe.styles";
import Comment from "../../components/Comments/addComment/comments.component";
import Loader from "../../components/Loader/loader.component";
import RecipeComments from "../../components/Comments/recipeComments/recipeComment.component";
import Carousel from "./singleRecipeCarousel.component";
import Heart from "../../components/Heart/heart.component";
import { NavLink } from "react-router-dom";
// import { averageOfStars } from "../../formattingUtils/average-of-stars";
// import { formatStars } from "../../formattingUtils/stars";
import { useAuth0 } from "@auth0/auth0-react";
import IngredientSection from "./Ingredients/Ingredients.component";
import InstructionSection from "./Instructions/Instructions.component";
import { useSelector } from "react-redux";

const SingleRecipeComponent = () => {
  const { id } = useParams();
  const { isAuthenticated } = useAuth0();

  const { recipe, comments, author, isLoading, error } = useSelector(
    (state) => state.singleRecipe
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h2>An error has occured</h2>;
  }

  return (
    <>
      <SingleRecipeContainer className="boxShadow">
        {!recipe ? (
          <Loader />
        ) : (
          <>
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
                    {author && (
                      <NavLink className="userLink" to={`/user/${author}`}>
                        {" "}
                        {author}{" "}
                      </NavLink>
                    )}
                    on {formatDate(recipe?.createdAt)}
                  </span>
                  {isAuthenticated && <Heart recipe={recipe?._id} />}
                </div>
                <>
                  {/* Work on finding the average of stars later */}
                  {/* <p>{formatStars(averageOfStars(average))}</p> */}
                  <p>Cook Time: {recipe?.cookTime}</p>
                  <p>Prep Time: {recipe?.prepTime}</p>
                  <p>
                    Total Time: {recipe?.totalTime?.hours} Hours{" "}
                    {recipe?.totalTime?.minutes} Minutes
                  </p>
                  <p>Sub Category: {recipe?.subCategory}</p>
                  <p>Favorites: {recipe?.favorites}</p>
                </>
              </RightSide>
            </TopDiv>
            <Bottom>
              <IngredientSection singleRecipe={recipe} />
              <InstructionSection singleRecipe={recipe} />
            </Bottom>
          </>
        )}
        <hr />
        <Comment singleRecipe={recipe} />
        <hr />
        <RecipeComments id={id} comments={comments} />
      </SingleRecipeContainer>
    </>
  );
};

export default SingleRecipeComponent;
