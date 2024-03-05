import { RecipeCont, TopLabel, LeftContainer, RightContainer } from "./recipe.styles";
import {formatDate} from '../../formattingUtils/date';
import {NavLink} from 'react-router-dom'; 
import Lemons from '../../images/lemons.jpg';
import Heart from "../Heart/heart.component";

const RecipeContainer = ({recipe}) => {

    const url = `recipe/${recipe._id}`;

    return ( 
        <RecipeCont key={recipe._id}>
            <LeftContainer>
           <TopLabel>
            <NavLink style={{color:'orange', textDecoration: 'none', fontSize: '1.516em', fontWeight: 'bold', textTransform: 'uppercase'}} to={url}>{recipe.recipeName}</NavLink>
            <Heart recipe={recipe}/>
            </TopLabel>
            <h4>{formatDate(recipe.createdAt)}</h4>
            <h4>Total Time: {recipe.totalTime.hours}:{recipe.totalTime.minutes}</h4>
            <h4>Favorites: {recipe.favorites}</h4>
            <h4>{recipe.subCategory}</h4>
           </LeftContainer>
           <RightContainer>
            <img src={Lemons} alt="lemons" className="recipePhoto"/>
            </RightContainer>
        </RecipeCont>
     );
}
 
export default RecipeContainer;
