import { RecipeCont, TopLabel, LeftContainer, RightContainer } from "./recipe.styles";
import {formatDate} from '../../formattingUtils/date';
import {NavLink} from 'react-router-dom'; 
import Lemons from '../../images/lemons.jpg';
//import Heart from "../Heart/heart.component";
import { useNavigate } from "react-router-dom";

const RecipeContainer = ({recipe}) => {
    const navigate = useNavigate();
    const url = `recipe/${recipe._id}`;

    return ( 
        <RecipeCont key={recipe._id} onClick={() => navigate(url)}>
          <LeftContainer>
           <TopLabel>
            <NavLink className="link" to={url}>{recipe.recipeName}</NavLink>
            </TopLabel>
            <p>{formatDate(recipe.createdAt)}</p>
            <p>Total Time: {recipe.totalTime.hours}:{recipe.totalTime.minutes}</p>
            <p>Favorites: {recipe.favorites}</p>
            <p>{recipe.subCategory}</p>
           </LeftContainer>
           <RightContainer>
            {recipe.images[0] ? <img src={recipe.images[0].data_url} alt="userPhoto" className="recipePhoto"/> : <img src={Lemons} alt="lemons" className="recipePhoto"/>}
            </RightContainer>
        </RecipeCont>
     );
}
 
export default RecipeContainer;
