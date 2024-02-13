import { RecipeCont } from "./recipe.styles";
const RecipeContainer = ({recipe}) => {
    return ( 
        <RecipeCont key={recipe._id}>
            <h2>{recipe.recipeName}</h2>
            <h4>{recipe.createdAt}</h4>
            <h4>Favorites: {recipe.favorites}</h4>

        </RecipeCont>
     );
}
 
export default RecipeContainer;