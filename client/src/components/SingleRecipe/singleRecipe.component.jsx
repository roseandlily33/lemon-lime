import { useState, useEffect, useCallback } from "react";
import { httpGetFullRecipeWithDetails } from "../../hooks/requests";
import { useParams } from "react-router-dom";
import { formatDate } from "../../formattingUtils/date";
import Lemon from '../../images/lemons.jpg';
import {SingleRecipeContainer, TopDiv, LeftSide, RightSide, Bottom }from './singleRecipe.styles';

const SingleRecipe = () => {
    const {id} = useParams();
    const [singleRecipe, setSingleRecipe] = useState();

    const fetchSingle = useCallback(async() => {
        const fetchedRecipe = await httpGetFullRecipeWithDetails(id);
        setSingleRecipe(fetchedRecipe);
    },[id])

    useEffect(() => {
        fetchSingle(id)
    }, [fetchSingle, id]);
   const totalTime = `${singleRecipe[0].totalTime.hours} Hours ${singleRecipe[0].totalTime.minutes} Minutes`;
   // let totalTime = 5;

    return (
        <>
        <SingleRecipeContainer>
      {!singleRecipe ?
       <h3>Recipe is loading</h3>
       : 
       <>
      <TopDiv>
        <LeftSide>
            <img src={Lemon} alt="lemon" />
        </LeftSide>
        <RightSide>
        <h2>{singleRecipe[0].recipeName}</h2>
        <h3>{formatDate(singleRecipe[0].createdAt)}</h3>
        <h4>Cook Time:{singleRecipe[0].cookTime}</h4>
        <h4>Prep Time: {singleRecipe[0].prepTime}</h4>
        <h4>Total Time: {totalTime}</h4>
        <h4>Sub Category: {singleRecipe[0].subCategory}</h4>
        <br />
        <h3>Ingredients</h3>
        <ul>
        {
            singleRecipe[0].ingredients.map((item) => {
                return <li>{item}</li>
            })
        }
        </ul>      
        </RightSide>
    </TopDiv>
    <Bottom>
       <h3>Instructions</h3>
       <ol>
       {singleRecipe[0].instructions.map((item) => {
        return <li>{item}</li>
       })}
       </ol>
    </Bottom>
       </>
       }
       </SingleRecipeContainer>
        </>
      );
}
 
export default SingleRecipe;