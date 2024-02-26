import { useState, useEffect} from "react";
import { httpGetFullRecipeWithDetails } from "../../hooks/requests";
import { useParams } from "react-router-dom";
import { formatDate } from "../../formattingUtils/date";
import Lemon from '../../images/lemons.jpg';
import {SingleRecipeContainer, TopDiv, LeftSide, RightSide, Bottom, IngredientsDiv }from './singleRecipe.styles';


const SingleRecipe = () => {
    const {id} = useParams();
    const [singleRecipe, setSingleRecipe] = useState();
    const [usersName, setUsersName] = useState();
    useEffect(() => {
      const fetchSingle = async() => {
          const res = await httpGetFullRecipeWithDetails(id);
          setSingleRecipe(res.foundRecipe[0]);
          setUsersName(res.authorOfRecipe.name);
      }
      fetchSingle();
  }, [id]);

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
        <h1>{singleRecipe.recipeName}</h1>
        <hr />
        <h2>Created by: {usersName} on {formatDate(singleRecipe.createdAt)}</h2>
        <>
        <h3>Cook Time: {singleRecipe.cookTime}</h3>
        <h3>Prep Time: {singleRecipe.prepTime}</h3>
        <h3>Total Time: {singleRecipe.totalTime.hours} Hours {singleRecipe.totalTime.minutes} Minutes</h3>
        <h3>Sub Category: {singleRecipe.subCategory}</h3>
        <h3>Favorites: {singleRecipe.favorites}</h3>
        </>
        <>
        <h2>Ingredients</h2>
        <hr/>
        <IngredientsDiv>
        <ul>
          {singleRecipe?.measurements.map(item => {
            return <li>{item}</li>
          })}
        </ul>
        <ul>
        {singleRecipe.ingredients.map(item => {
            return <li>{item}</li>
        })
        }
        </ul>  
        </IngredientsDiv>
        </>
       </RightSide>
     </TopDiv>
     <Bottom>
        <h2>Instructions</h2>
        <hr />
        <ol>
        {singleRecipe.instructions.map((item) => {
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