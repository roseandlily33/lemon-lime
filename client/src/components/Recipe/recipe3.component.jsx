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
            <NavLink className="link" style={{textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold', textTransform: 'uppercase'}} to={recipeUrl}>{recipe.recipeName}</NavLink>
            <p style={{color: 'hsl(41, 9%, 35%)'}}>{formatDate(recipe.createdAt)}</p>
            <p style={{color: 'hsl(41, 9%, 35%)'}}>Favorites: {recipe.favorites}</p>
            {recipe.images[0] ? <img src={recipe.images[0].data_url} alt="userPhoto" className="recipePhoto"/> : <img src={Lemons} alt="lemons" className="recipePhoto"/>}
            <ButtonRecipeContainer>
            <button onClick={() => navigate(editUrl)}>Edit</button>
            </ButtonRecipeContainer>
        </SideContainer>
     );
}
 
export default RecipeContainer3;