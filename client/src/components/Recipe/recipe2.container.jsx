import { SideContainer, TopContainer } from "./recipe2.styles";
import {formatDate} from '../../formattingUtils/date';
import {NavLink} from 'react-router-dom'; 
import Lemons from '../../images/lemons.jpg';
//import Heart from "../Heart/heart.component";
import { useNavigate } from "react-router-dom";

const RecipeContainer2 = ({recipe}) => {
   const navigate = useNavigate();
    const url = `/recipe/${recipe._id}`;
   
    return ( 
        <SideContainer key={recipe._id} onClick={() => navigate(url)}>
           <div className="topDiv">
           <TopContainer>
           <NavLink className="link" to={url}>{recipe.recipeName}</NavLink>
           {/* <Heart recipe={recipe}/> */}
           </TopContainer>
            <p>{formatDate(recipe.createdAt)}</p>
            <p>Favorites: {recipe.favorites}</p>
           </div>
           {recipe.images[0] ? <img src={recipe.images[0].data_url} alt="userPhoto" className="recipePhoto"/> : <img src={Lemons} alt="lemons" className="recipePhoto"/>}
        </SideContainer>
     );
}
 
export default RecipeContainer2;