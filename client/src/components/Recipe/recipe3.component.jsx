import { SideContainer, ButtonRecipeContainer } from "./recipe3.styles";
import {formatDate} from '../../formattingUtils/date';
import {NavLink} from 'react-router-dom'; 
import Lemons from '../../images/lemons.jpg';
import {useNavigate} from 'react-router-dom';


const RecipeContainer3 = ({recipe}) => {
    const navigate = useNavigate();
    const recipeUrl = `/recipe/${recipe._id}`
    const editUrl = `/user/edit/${recipe._id}`;

    return ( 
        <SideContainer key={recipe._id}>
            <NavLink style={{color:'orange', textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold', textTransform: 'uppercase'}} to={recipeUrl}>{recipe.recipeName}</NavLink>
            <h4>{formatDate(recipe.createdAt)}</h4>
            <h4>Favorites: {recipe.favorites}</h4>
            <img src={Lemons} alt="lemons" />
            <ButtonRecipeContainer>
            <button onClick={() => navigate(editUrl)}>Edit</button>
            </ButtonRecipeContainer>
        </SideContainer>
     );
}
 
export default RecipeContainer3;