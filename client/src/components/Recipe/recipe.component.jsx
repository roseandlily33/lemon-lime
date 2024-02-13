import { RecipeCont } from "./recipe.styles";
import {formatDate} from '../../formattingUtils/date';
import {NavLink} from 'react-router-dom'; 
const RecipeContainer = ({recipe}) => {
    const url = `recipe/${recipe._id}`
    return ( 
        <RecipeCont key={recipe._id}>
           <NavLink to={url}>{recipe.recipeName}</NavLink>
            <h4>{formatDate(recipe.createdAt)}</h4>
            <h4>Favorites: {recipe.favorites}</h4>
        </RecipeCont>
     );
}
 
export default RecipeContainer;
