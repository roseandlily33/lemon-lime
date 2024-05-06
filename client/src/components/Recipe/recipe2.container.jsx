import { SideContainer, TopContainer } from "./recipe2.styles";
import {formatDate} from '../../formattingUtils/date';
import {NavLink} from 'react-router-dom'; 
import Lemons from '../../images/lemons.jpg';
import { useNavigate } from "react-router-dom";
import CloudImage from "../../Photos/photo.component";
// import Heart from "../Heart/heart.component";

const RecipeContainer2 = ({recipe}) => {
   const navigate = useNavigate();
    const url = `/recipe/${recipe._id}`;
   
    return ( 
        <SideContainer key={recipe._id} onClick={() => navigate(url)} className="boxShadowHover">
           <div className="topDiv">
           <TopContainer>
           <NavLink className="link" to={url}>{recipe.recipeName.slice(0, 15)}</NavLink>
           {/* <Heart recipe={recipe._id}/> */}
           </TopContainer>
            <p>{formatDate(recipe.createdAt)}</p>
            <p>Favorites: {recipe.favorites}</p>
           </div>
           {recipe.images[0] ? <CloudImage publicId={recipe.images[0].publicId}/> : <img src={Lemons} alt="lemons" className="recipePhoto"/>}
        </SideContainer>
     );
}
 
export default RecipeContainer2;