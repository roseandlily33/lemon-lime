import { FavoritesContainer } from "./favorites.styles";
import RecipeContainer from "../../components/Recipe/recipe.component";
import { useEffect, useState } from "react";
import {useAuth0} from '@auth0/auth0-react';
import { httpGetUsersFavoriteRecipes } from "../../hooks/userRequests";
import {useNavigate} from 'react-router-dom';

const FavoritesPage = () => {
    const navigate = useNavigate();
    const [favoriteRecipes, setFavoriteRecipes] = useState();
    const {user, isAuthenticated} = useAuth0();

    useEffect(() => {
        const getFaveRecipes = async() => {
            let recipes = await httpGetUsersFavoriteRecipes(user.sub);
            setFavoriteRecipes(recipes.favorites);
        }    
        getFaveRecipes();
    }, [user]);

    if(!isAuthenticated){
        navigate('/');
    }

    return ( 
        <FavoritesContainer>
            <h2>Your Favorite Recipes</h2>
            {favoriteRecipes?.map((recipe) => {
                return <RecipeContainer recipe={recipe} />
            })}
        </FavoritesContainer>
     );
}
 
export default FavoritesPage;