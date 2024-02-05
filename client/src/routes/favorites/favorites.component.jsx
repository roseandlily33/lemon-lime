import { FavoritesContainer } from "./favorites.styles";
import RecipeContainer from "../../components/Recipe/recipe.component";
const FavoritesPage = () => {
    return ( 
        <FavoritesContainer>
            <h2>Your Favorite Recipes</h2>
            <RecipeContainer />
            <RecipeContainer />
            <RecipeContainer />
        </FavoritesContainer>
     );
}
 
export default FavoritesPage;