import { useState, useEffect} from "react";
import { httpGetFullRecipeWithDetails } from "../../hooks/recipeRequests";
import { useParams } from "react-router-dom";
import { formatDate } from "../../formattingUtils/date";
import Lemon from '../../images/lemons.jpg';
import {SingleRecipeContainer, TopDiv, LeftSide, RightSide, Bottom, IngredientsDiv, InstructionsDiv }from './singleRecipe.styles';
import Comment from "../Comments/addComment/comments.component";
import Loader from "../Loader/loader.component";
import RecipeComments from "../Comments/recipeComments/recipeComment.component";
import Carousel from "./singleRecipeCarousel.component";

const SingleRecipe = () => {
    const {id} = useParams();
    const [singleRecipe, setSingleRecipe] = useState();
    console.log('Single Recipe', singleRecipe)
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
       <Loader />
       : 
    <>
    <TopDiv>
        <LeftSide>
        {singleRecipe.images[0] ? <Carousel images={singleRecipe.images} /> : <img src={Lemon} alt="lemons" className="recipePhoto"/>}
       </LeftSide>
        <RightSide>
        <h1>{singleRecipe.recipeName}</h1>
        <hr />
        <span>Created by: {usersName} on {formatDate(singleRecipe.createdAt)}</span>
        <>
        <h4>Cook Time: {singleRecipe.cookTime}</h4>
        <h4>Prep Time: {singleRecipe.prepTime}</h4>
        <h4>Total Time: {singleRecipe.totalTime.hours} Hours {singleRecipe.totalTime.minutes} Minutes</h4>
        <h4>Sub Category: {singleRecipe.subCategory}</h4>
        <h4>Favorites: {singleRecipe.favorites}</h4>
        </>
       </RightSide>
     </TopDiv>
     <Bottom>
   <h2>Ingredients</h2>
  <IngredientsDiv className="glass">
  <ul>
    {singleRecipe.ingredients?.map(({id,mea}, index) => {
      return <div style={{display: 'flex'}} key={id}>
      <li style={{paddingRight: '1.5em', color: 'green', listStyleType: 'none'}}>{index + 1}</li>
      <li style={{listStyleType: 'none'}}>{mea}</li>
      </div>
    })}
  </ul>
  <ul>
  {singleRecipe.ingredients?.map(({id, ing}) => {
      return <li key={id} style={{listStyleType: 'none'}}>{ing}</li>
  })
  }
  </ul>  
  </IngredientsDiv>
  <h2>Instructions</h2>
  <InstructionsDiv className="glass">
        <ol>
        {singleRecipe?.instructions.map(({id, ins}, index) => {
        return <div style={{display: 'flex'}} key={id}>
        <li style={{paddingRight: '1.5em', color: 'green', listStyleType: 'none'}}>{index + 1}</li>
        <li style={{listStyleType: 'none'}}>{ins}</li>
        </div>
        })}
        </ol>
  </InstructionsDiv>
        </Bottom>
       </>
       }
       </SingleRecipeContainer>
       <Comment/>
       <RecipeComments id={id} />
        </>
      );
}
 
export default SingleRecipe;