import { SideContainer, ButtonRecipeContainer } from "./recipe3.styles";
import {formatDate} from '../../formattingUtils/date';
import {NavLink} from 'react-router-dom'; 
import Lemons from '../../images/lemons.jpg';

const RecipeContainer3 = ({recipe}) => {
    const url = `recipe/${recipe._id}`
    return ( 
        <SideContainer key={recipe._id}>
            <NavLink style={{color:'orange', textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold', textTransform: 'uppercase'}} to={url}>{recipe.recipeName}</NavLink>
            <h3>{formatDate(recipe.createdAt)}</h3>
            <h3>Favorites: {recipe.favorites}</h3>
            <img src={Lemons} alt="lemons" />
            <ButtonRecipeContainer>
            <button>Edit</button>
            <button>Delete</button>
            </ButtonRecipeContainer>
        </SideContainer>
     );
}
 
export default RecipeContainer3;