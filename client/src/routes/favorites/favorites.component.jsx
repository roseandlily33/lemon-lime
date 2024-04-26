import { FavoritesContainerMain, FavoritesRecipesDiv  } from "./favorites.styles";
import RecipeContainer2 from "../../components/Recipe/recipe2.container";
import {useAuth0} from '@auth0/auth0-react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Loader from "../../components/Loader/loader.component";

const FavoritesPage = () => {
    const {isAuthenticated} = useAuth0();
    const navigate = useNavigate();
    const favorites = useSelector(state => state.favorites.favorites);
    const faveRecipes = useSelector(state => state.favorites.favoriteRecipes)

    if(!isAuthenticated){
        navigate('/');
    }

    return ( 
        <FavoritesContainerMain>
            <h2>Your Favorite Recipes</h2>
            <FavoritesRecipesDiv className="scrollBar">
           {!favorites ? <Loader /> :
            <>
             {faveRecipes?.map((recipe) => {
                return <RecipeContainer2 recipe={recipe} />
            })}
            </>
           }
            </FavoritesRecipesDiv>
        </FavoritesContainerMain>
     );
}
 
export default FavoritesPage;