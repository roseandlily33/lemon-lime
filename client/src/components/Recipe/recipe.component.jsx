import { RecipeCont } from "./recipe.styles";
import {formatDate} from '../../formattingUtils/date';
import {NavLink} from 'react-router-dom'; 
import Lemons from '../../images/lemons.jpg';
const RecipeContainer = ({recipe}) => {
    const url = `recipe/${recipe._id}`
    return ( 
        <RecipeCont key={recipe._id}>
           <div>
            <NavLink style={{color:'orange', textDecoration: 'none', fontSize: '1.516em', fontWeight: 'bold', textTransform: 'uppercase'}} to={url}>{recipe.recipeName}</NavLink>
            <h4>{formatDate(recipe.createdAt)}</h4>
            <h4>Total Time: {recipe.totalTime.hours}:{recipe.totalTime.minutes}</h4>
            <h4>Favorites: {recipe.favorites}</h4>
            <h4>{recipe.subCategory}</h4>
           </div>
            <div>
            <img src={Lemons} alt="lemons" />
            </div>
        </RecipeCont>
     );
}
 
export default RecipeContainer;
