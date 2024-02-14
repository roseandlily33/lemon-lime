import { SideContainer } from "./recipe2.styles";
import {formatDate} from '../../formattingUtils/date';
import {NavLink} from 'react-router-dom'; 
import Lemons from '../../images/lemons.jpg';
const RecipeContainer2 = ({recipe}) => {
    const url = `recipe/${recipe._id}`
    return ( 
        <SideContainer key={recipe._id}>
            <NavLink style={{color:'orange', textDecoration: 'none', fontSize: '1.5em'}} to={url}>{recipe.recipeName}</NavLink>
            <h4>{formatDate(recipe.createdAt)}</h4>
            <h4>Favorites: {recipe.favorites}</h4>
            <img src={Lemons} alt="lemons" />
        </SideContainer>
     );
}
 
export default RecipeContainer2;