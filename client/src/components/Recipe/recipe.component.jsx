import { RecipeCont } from "./recipe.styles";
import {formatDate} from '../../formattingUtils/date';
import {NavLink} from 'react-router-dom'; 
import Lemons from '../../images/lemons.jpg';
const RecipeContainer = ({recipe}) => {
    const url = `recipe/${recipe._id}`
    return ( 
        <RecipeCont key={recipe._id}>
           <div>
            <NavLink style={{color:'orange', textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold', textTransform: 'uppercase'}} to={url}>{recipe.recipeName}</NavLink>
            <h3>{formatDate(recipe.createdAt)}</h3>
            <h3>Total Time: {recipe.totalTime.hours}:{recipe.totalTime.minutes}</h3>
            <h3>Favorites: {recipe.favorites}</h3>
            <h3>{recipe.subCategory}</h3>
           </div>
            <div>
            <img src={Lemons} alt="lemons" />
            </div>
        </RecipeCont>
     );
}
 
export default RecipeContainer;
