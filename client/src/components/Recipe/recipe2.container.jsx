import { SideContainer, TopContainer } from "./recipe2.styles";
import {formatDate} from '../../formattingUtils/date';
import {NavLink} from 'react-router-dom'; 
import Lemons from '../../images/lemons.jpg';
import Heart from "../Heart/heart.component";

const RecipeContainer2 = ({recipe}) => {
    const url = `/recipe/${recipe._id}`;
   
    return ( 
        <SideContainer key={recipe._id}>
           <div className="topDiv">
           <TopContainer>
           <NavLink style={{textDecoration: 'none', fontSize: '1.4rem', fontWeight: 'bold', 
           textTransform: 'uppercase'}} className="link" to={url}>{recipe.recipeName}</NavLink>
           <Heart recipe={recipe}/>
           </TopContainer>
            <p style={{color: 'hsl(41, 9%, 35%)'}}>{formatDate(recipe.createdAt)}</p>
            <p style={{color: 'hsl(41, 9%, 35%)'}}>Favorites: {recipe.favorites}</p>
           </div>
           {recipe.images[0] ? <img src={recipe.images[0].data_url} alt="userPhoto" className="recipePhoto"/> : <img src={Lemons} alt="lemons" className="recipePhoto"/>}
        </SideContainer>
     );
}
 
export default RecipeContainer2;