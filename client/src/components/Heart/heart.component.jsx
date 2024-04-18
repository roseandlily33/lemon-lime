import DeleteHeart from "./deleteFave.component";
import AddHeart from "./addFave.component";
import { httpGetFavoritesForMainPage } from "../../hooks/userRequests";
import { useState, useEffect } from "react";
import {useAuth0} from '@auth0/auth0-react';
import {useSelector, useDispatch} from 'react-redux';
import { httpAddFavoriteRecipe } from "../../hooks/userRequests";
import { httpDeleteFavoriteRecipe } from "../../hooks/userRequests";
import { fetchFavorites } from "../../redux/favoritesSlice";

//Recipe = the id 
const Heart = ({recipe}) => {
    const {user} = useAuth0();
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.favorites);
    const [found, setFound] = useState(false);
   console.log('Favorites', favorites.recipe)
    if(favorites.recipe === true){
        console.log('in the check')
        console.log('Favorited Options', recipe, favorites[recipe]);
        setFound(true);
    }
    const addFavorite = async(userId, recipeId) => {
        const adding = await httpAddFavoriteRecipe(userId, recipeId);
        dispatch(fetchFavorites(user.sub));
        console.log('Recipe added', adding);
       // setFound(true)
    }
    const deleteFavorite = async(userId, recipeId) => {
        const deleting = await httpDeleteFavoriteRecipe(userId, recipeId);
        dispatch(fetchFavorites(user.sub));
        console.log('Deleting', deleting);
        //setFound(false);
    }

    return ( 
        <>
        {
            found ?
            <>
            <svg onClick={() => deleteFavorite(user.sub, recipe)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" class="icon-heart">
            <circle cx="12" cy="12" r="10" class="primaryHeartFaved"/>
            <path class="secondaryHeartFaved" d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z"/>
             </svg>
            </>
            :
            <>
            <svg onClick={() => addFavorite(user.sub, recipe)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" class="icon-heart">
            <circle cx="12" cy="12" r="10" class="primaryHeart"/>
            <path class="secondaryHeart" d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z"/>
            </svg>
            </>
        }
        </>
     );
}
 
export default Heart;