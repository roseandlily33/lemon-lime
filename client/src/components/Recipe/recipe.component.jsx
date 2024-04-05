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
            <NavLink className="link" style={{textDecoration: 'none', fontSize: '1.516em', fontWeight: 'bold', textTransform: 'uppercase'}} to={url}>{recipe.recipeName}</NavLink>
            <Heart recipe={recipe}/>
            </TopLabel>
            <p style={{color: 'hsl(41, 9%, 35%)'}}>{formatDate(recipe.createdAt)}</p>
            <p style={{color: 'hsl(41, 9%, 35%)'}}>Total Time: {recipe.totalTime.hours}:{recipe.totalTime.minutes}</p>
            <p style={{color: 'hsl(41, 9%, 35%)'}}>Favorites: {recipe.favorites}</p>
            <p style={{color: 'hsl(41, 9%, 35%)'}}>{recipe.subCategory}</p>
           </LeftContainer>
           <RightContainer>
            {recipe.images[0] ? <img src={recipe.images[0].data_url} alt="userPhoto" className="recipePhoto"/> : <img src={Lemons} alt="lemons" className="recipePhoto"/>}
            </RightContainer>
        </RecipeCont>
     );
}
 
export default RecipeContainer;
