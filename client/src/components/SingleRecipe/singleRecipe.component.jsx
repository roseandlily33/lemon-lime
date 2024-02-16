import { useState, useEffect, useCallback } from "react";
import { httpGetFullRecipeWithDetails } from "../../hooks/requests";
import { useParams } from "react-router-dom";
import { formatDate } from "../../formattingUtils/date";
import Lemon from '../../images/lemons.jpg';
import {SingleRecipeContainer, TopDiv, LeftSide, RightSide, Bottom }from './singleRecipe.styles';

const SingleRecipe = () => {
    const {id} = useParams();
    const [singleRecipe, setSingleRecipe] = useState();

//    const FetchRecipe = async() => {
//     const fetchSingle = useCallback(async() => {
//         const fetchedRecipe = await httpGetFullRecipeWithDetails(id);
//         await setSingleRecipe(fetchedRecipe);
//     },[id])

//     useEffect(async() => {
//        await fetchSingle(id)
//     }, [fetchSingle, id]);
//    }

    useEffect(() => {
        const fetchSingle = async() => {
            const res = await httpGetFullRecipeWithDetails(id);
            setSingleRecipe(res);
        }
        fetchSingle();
    }, [id])

    console.log('Inside component', singleRecipe)
    return(
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
         <h2>{singleRecipe.recipeName}</h2>
       <h3>{formatDate(singleRecipe.createdAt)}</h3>
      <h4>Cook Time:{singleRecipe.cookTime}</h4>
       <h4>Prep Time: {singleRecipe.prepTime}</h4>
      <h4>Total Time: {singleRecipe.totalTime.hours} Hours {singleRecipe.totalTime.minutes} Minutes</h4>
     <h4>Sub Category: {singleRecipe.subCategory}</h4>
    <br />
       <h3>Ingredients</h3>
       <ul>
    {singleRecipe.ingredients.map(item => {
        return <li>{item}</li>
    })
     }
     </ul>      
       </RightSide>
     </TopDiv>
    <Bottom>
        <h3>Instructions</h3>
       <ol>
       {singleRecipe.instructions.map((item) => {
      return <li>{item}</li>
  })}
   </ol>
 </Bottom>
       </>}
       </SingleRecipeContainer>
        </>
      );
}
 
export default SingleRecipe;