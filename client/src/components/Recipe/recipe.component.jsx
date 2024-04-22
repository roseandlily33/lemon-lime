import { RecipeCont, TopLabel, LeftContainer, RightContainer } from "./recipe.styles";
import {formatDate} from '../../formattingUtils/date';
import {NavLink} from 'react-router-dom'; 
import Lemons from '../../images/lemons.jpg';
import { useNavigate } from "react-router-dom";
import CloudImage from "../../Photos/photo.component";

const RecipeContainer = ({recipe}) => {
    console.log('Recipe Image', recipe)
    const navigate = useNavigate();
    const url = `recipe/${recipe._id}`;

    return ( 
        <RecipeCont key={recipe._id} onClick={() => navigate(url)}>
          <LeftContainer>
           <TopLabel>
            <NavLink className="link" to={url}>{recipe.recipeName}</NavLink>
            </TopLabel>
            <p>{formatDate(recipe.createdAt)}</p>
            <p>Total Time: {recipe.totalTime.hours}:{recipe.totalTime.minutes}</p>
            <p>Favorites: {recipe.favorites}</p>
            <p>{recipe.subCategory}</p>
           </LeftContainer>
           <RightContainer>
            {recipe.images[0] ? <CloudImage publicId={recipe.images[0].publicId}/>: <img src={Lemons} alt="lemons" className="recipePhoto"/>}
            </RightContainer>
        </RecipeCont>
     );
}
 
export default RecipeContainer;
