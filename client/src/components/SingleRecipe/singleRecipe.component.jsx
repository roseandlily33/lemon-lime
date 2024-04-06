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
        <span style={{color: 'hsl(42.857142857142854, 8.641975308641971%, 31.76470588235294%)'}}>Created by: {usersName} on {formatDate(singleRecipe.createdAt)}</span>
        <>
        <p>Cook Time: {singleRecipe.cookTime}</p>
        <p>Prep Time: {singleRecipe.prepTime}</p>
        <p>Total Time: {singleRecipe.totalTime.hours} Hours {singleRecipe.totalTime.minutes} Minutes</p>
        <p>Sub Category: {singleRecipe.subCategory}</p>
        <p>Favorites: {singleRecipe.favorites}</p>
        </>
       </RightSide>
     </TopDiv>
     <Bottom>

  <IngredientsDiv>
  <h3>Ingredients</h3>

  <ul className="outside">
    <div className="ing1">
    {singleRecipe.ingredients?.map(({id,mea}, index) => {
      return <div className="insideIng1">
      <li key={id} style={{color: 'green', paddingRight: '0.7em', listStyleType: 'none'}}>{index + 1}</li>
      <li key={mea} style={{listStyleType: 'none'}}>{mea}</li>
      </div>
    })}
    </div>
    <div className="ing2" >
  {singleRecipe.ingredients?.map(({id, ing}) => {
      return <li key={id} style={{listStyleType: 'none'}}>{ing}</li>
  })
  }
   </div>
  </ul>  
  </IngredientsDiv>

  <InstructionsDiv>
      <h3>Instructions</h3>

        <ol>
        {singleRecipe?.instructions.map(({id, ins}, index) => {
        return <div style={{display: 'flex'}} key={id}>
        <li style={{listStyleType: 'none', paddingRight: '0.7em', color: 'green'}}>{index + 1}</li>
        <li style={{listStyleType: 'none'}}>{ins}</li>
        </div>
        })}
        </ol>
  </InstructionsDiv>
        </Bottom>
       </>
       }
       </SingleRecipeContainer>
       <hr />
       <Comment/>
       <hr />
       <RecipeComments id={id} />
        </>
      );
}
 
export default SingleRecipe;