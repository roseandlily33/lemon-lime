import { SideContainer, TopContainer } from "./recipe2.styles";
import {formatDate} from '../../formattingUtils/date';
import {NavLink} from 'react-router-dom'; 
import Lemons from '../../images/lemons.jpg';
import Heart from "../../routes/favorites/favorite.component";

const RecipeContainer2 = ({recipe}) => {
    const url = `/recipe/${recipe._id}`
    return ( 
        <SideContainer key={recipe._id}>
           <div>
           <TopContainer>
           <NavLink style={{color:'orange', textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold', textTransform: 'uppercase'}} to={url}>{recipe.recipeName}</NavLink>
           <Heart />
           </TopContainer>
            <h4>{formatDate(recipe.createdAt)}</h4>
            <h4>Favorites: {recipe.favorites}</h4>
           
           </div>
            <img src={Lemons} alt="lemons" />
            
        </SideContainer>
     );
}
 
export default RecipeContainer2;