import { useState, useEffect } from "react";
import { httpGetFullRecipeWithDetails } from "../../hooks/recipeRequests";
import { useParams } from "react-router-dom";
import { formatDate } from "../../formattingUtils/date";
import Lemon from "../../images/lemons.jpg";
import {
  SingleRecipeContainer,
  TopDiv,
  LeftSide,
  RightSide,
  Bottom,
} from "./SingleRecipe.styles";
import Comment from "../Comments/addComment/Comments.component";
import Loader from "../Loader/Loader.component";
import RecipeComments from "../Comments/recipeComments/RecipeComment.component";
import Carousel from "./SingleRecipeCarousel.component";
import Heart from "../Heart/Heart.component";
import { NavLink } from "react-router-dom";
import { averageOfStars } from "../../formattingUtils/average-of-stars";
import { formatStars } from "../../formattingUtils/stars";
import { useAuth0 } from "@auth0/auth0-react";
import IngredientSection from "./Ingredients/Ingredients.component";
import InstructionSection from "./Instructions/Instructions.component";

const SingleRecipeComponent = () => {
  const { id } = useParams();
  const { isAuthenticated } = useAuth0();
  const [singleRecipe, setSingleRecipe] = useState();
  const [usersName, setUsersName] = useState();
  const [comments, setComments] = useState();
  const [average, setAverage] = useState();

  useEffect(() => {
    const fetchSingle = async () => {
      const res = await httpGetFullRecipeWithDetails(id);
      //console.log('Single recipes', res)
      setSingleRecipe(res?.foundRecipe[0]);
      setUsersName(res?.authorOfRecipe.name);
      setComments(res?.allComments);
      // console.log('INCOMING RATING', res?.allComments)
      setAverage(res?.allComments.slice(0, 10));
    };
    fetchSingle();
  }, [id]);

  return (
    <>
      <SingleRecipeContainer className="boxShadow">
        {!singleRecipe ? (
          <Loader />
        ) : (
          <>
            <TopDiv>
              <LeftSide>
                {singleRecipe?.images[0] ? (
                  <Carousel images={singleRecipe?.images} />
                ) : (
                  <img src={Lemon} alt="lemons" className="recipePhoto" />
                )}
              </LeftSide>
              <RightSide>
                <h2>{singleRecipe?.recipeName}</h2>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "2em" }}
                >
                  <span>
                    Created by:
                    <NavLink
                      className="userLink"
                      to={`/user/${singleRecipe.author}`}
                    >
                      {" "}
                      {usersName}{" "}
                    </NavLink>
                    on {formatDate(singleRecipe?.createdAt)}
                  </span>
                  {isAuthenticated && <Heart recipe={singleRecipe?._id} />}
                </div>
                <>
                  <p>{formatStars(averageOfStars(average))}</p>
                  <p>Cook Time: {singleRecipe?.cookTime}</p>
                  <p>Prep Time: {singleRecipe?.prepTime}</p>
                  <p>
                    Total Time: {singleRecipe?.totalTime?.hours} Hours{" "}
                    {singleRecipe?.totalTime?.minutes} Minutes
                  </p>
                  <p>Sub Category: {singleRecipe?.subCategory}</p>
                  <p>Favorites: {singleRecipe?.favorites}</p>
                </>
              </RightSide>
            </TopDiv>
            <Bottom>
              <IngredientSection singleRecipe={singleRecipe} />
              <InstructionSection singleRecipe={singleRecipe} />
            </Bottom>
          </>
        )}
        <hr />
        <Comment singleRecipe={singleRecipe} />
        <hr />
        <RecipeComments id={id} comments={comments} />
      </SingleRecipeContainer>
    </>
  );
};

export default SingleRecipeComponent;
