import { useState, useEffect} from "react";
import { httpGetFullRecipeWithDetails } from "../../hooks/recipeRequests";
import { useParams } from "react-router-dom";
import { formatDate } from "../../formattingUtils/date";
import Lemon from '../../images/lemons.jpg';
import {SingleRecipeContainer, TopDiv, LeftSide, RightSide, Bottom }from './singleRecipe.styles';
import Comment from "../Comments/addComment/comments.component";
import Loader from "../Loader/loader.component";
import RecipeComments from "../Comments/recipeComments/recipeComment.component";
import Carousel from "./singleRecipeCarousel.component";

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
        <>
        <h2>Ingredients</h2>
  
        <>
        <ul>
          {singleRecipe?.measurements.map((item, index) => {
            return <div style={{display: 'flex'}}>
            <li style={{paddingRight: '1em', color: 'green'}}>{index + 1}</li>
            <li>{item}</li>
            </div>
          })}
        </ul>
        <ul>
        {singleRecipe?.ingredients.map(item => {
            return <li>{item}</li>
        })
        }
        </ul>  
        </>
        </>
       </RightSide>
     </TopDiv>
     <Bottom>
        <h2>Instructions</h2>
        <ol>
        {singleRecipe?.instructions.map((item) => {
        return <li>{item}</li>
        })}
        </ol>
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