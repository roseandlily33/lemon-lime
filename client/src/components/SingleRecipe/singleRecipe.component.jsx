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
import Heart from '../Heart/heart.component';
import { NavLink } from "react-router-dom";
import { averageOfStars } from "../../formattingUtils/averageOfStarts";
import { formatStars } from "../../formattingUtils/stars";

const SingleRecipeComponent = () => {
    const {id} = useParams();
    const [singleRecipe, setSingleRecipe] = useState();
    const [usersName, setUsersName] = useState();
    const [comments, setComments] = useState();
    const [average, setAverage] = useState();
    
    useEffect(() => {
      const fetchSingle = async() => {
          const res = await httpGetFullRecipeWithDetails(id);
          //console.log('Single recipes', res)
          setSingleRecipe(res.foundRecipe[0]);
          setUsersName(res.authorOfRecipe.name);
          setComments(res.allComments);
          console.log('INCOMING RATING', res.allComments)
          setAverage(res.allComments.slice(0, 10));
      }
      fetchSingle();
  }, [id]);

    return(
      <>
      <SingleRecipeContainer className="boxShadow">
      {!singleRecipe ?
       <Loader />
       : 
    <>
    <TopDiv>
        <LeftSide>
        {singleRecipe.images[0] ? <Carousel images={singleRecipe.images} /> : <img src={Lemon} alt="lemons" className="recipePhoto"/>}
       </LeftSide>
        <RightSide >
        <h2>{singleRecipe?.recipeName}</h2>
        <div style={{display: 'flex', alignItems: 'center', gap: '2em'}}>
        <span>Created by: 
          <NavLink className="userLink" to={`/user/${singleRecipe.author}`}> {usersName} </NavLink>
            on {formatDate(singleRecipe.createdAt)}</span>
        <Heart recipe={singleRecipe._id}/>
        </div>
        <>
        <p>{formatStars(averageOfStars(average))}</p>
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
  <h4>Ingredients</h4>
  <ul className="outside">
    <div className="ing1">
    {singleRecipe.ingredients?.map(({id,mea}, index) => {
      return <div className="insideIng1">
      <p key={id} style={{color: '#6C9251', paddingRight: '0.7em'}}>{index + 1}</p>
      <p key={mea}>{mea}</p>
      </div>
    })}
    </div>
    <div className="ing2" >
  {singleRecipe.ingredients?.map(({id, ing}) => {
      return <p key={id}>{ing}</p>
  })
  }
   </div>
  </ul>  
  </IngredientsDiv>

  <InstructionsDiv >
      <h4>Instructions</h4>
        <ol>
        {singleRecipe?.instructions?.map(({id, ins}, index) => {
        return <div style={{display: 'flex'}} key={id}>
        <p style={{paddingRight: '0.7em', color: '#6C9251'}}>{index + 1}</p>
        <p>{ins}</p>
        </div>
        })}
        </ol>
  </InstructionsDiv>
        </Bottom>
       </>
       }
       
       <hr />
       <Comment singleRecipe={singleRecipe}/>
       <hr />
       <RecipeComments id={id} comments={comments} />
       </SingleRecipeContainer>
        </>
      );
}
 
export default SingleRecipeComponent;