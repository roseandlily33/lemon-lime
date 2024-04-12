import { FavoritesContainerMain, FavoritesRecipesDiv  } from "./favorites.styles";
import RecipeContainer2 from "../../components/Recipe/recipe2.container";
import {useAuth0} from '@auth0/auth0-react';
import { httpGetUsersFavoriteRecipes } from "../../hooks/userRequests";
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

const FavoritesPage = () => {
    const {favorites} = useSelector(state => state.favorites.favorites);
    console.log('Users Favorites', favorites)
    const navigate = useNavigate();
    const {user, isAuthenticated} = useAuth0();

    // useEffect(() => {
    //     const GetFaveRecipes = async() => {
    //         let recipes = await httpGetUsersFavoriteRecipes(user.sub);
    //         setFavoriteRecipes(recipes.favorites);
    //     }    
    //     GetFaveRecipes();
    // }, [user]);

    if(!isAuthenticated){
        navigate('/');
    }

    return ( 
        <FavoritesContainerMain>
            <h2>Your Favorite Recipes</h2>
            <FavoritesRecipesDiv>
            {favorites?.map((recipe) => {
                return <RecipeContainer2 recipe={recipe} />
            })}
            </FavoritesRecipesDiv>
        </FavoritesContainerMain>
     );
}
 
export default FavoritesPage;