import { RecipeCont } from "./recipe.styles";
import {formatDate} from '../../formattingUtils/date';
import {NavLink} from 'react-router-dom'; 
import Heart from "../../routes/favorites/favorite.component";
import Lemons from '../../images/lemons.jpg';
import { TopContainer } from "./recipe2.styles";

const RecipeContainer = ({recipe}) => {
    const url = `recipe/${recipe._id}`
    return ( 
        <RecipeCont key={recipe._id}>
           <div>
           <TopContainer>
            <NavLink style={{color:'orange', textDecoration: 'none', fontSize: '1.516em', fontWeight: 'bold', textTransform: 'uppercase'}} to={url}>{recipe.recipeName}</NavLink>
            <Heart id={recipe._id}/>
            </TopContainer>
            <h4>{formatDate(recipe.createdAt)}</h4>
            <h4>Total Time: {recipe.totalTime.hours}:{recipe.totalTime.minutes}</h4>
            <h4>Favorites: {recipe.favorites}</h4>
            <h4>{recipe.subCategory}</h4>
           </div>
            <img src={Lemons} alt="lemons" />
        </RecipeCont>
     );
}
 
export default RecipeContainer;
