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
    useEffect(() => {
   if(recipe && favorites){
    if(favorites[recipe] === 'true'){
        setFound(true);
    } else  {
        setFound(false);
    } 
   }else {
    setFound(false);
    }
   }, [recipe, favorites])
    const addFavorite = async(userId, recipeId) => {
         await httpAddFavoriteRecipe(userId, recipeId);
        dispatch(fetchFavorites(user.sub));
        //console.log('Recipe added', adding);
        setFound(true)
    }
    const deleteFavorite = async(userId, recipeId) => {
         await httpDeleteFavoriteRecipe(userId, recipeId);
        dispatch(fetchFavorites(user.sub));
        //console.log('Deleting', deleting);
        setFound(false);
    }

    return ( 
        <>
        {
            found ?
            <>
            <svg onClick={() => deleteFavorite(user.sub, recipe)} xmlns="http://www.w3.org/2000/svg"  className='icon icon-heart' viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" className="primaryHeartFaved"/>
            <path className="secondaryHeartFaved" d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z"/>
             </svg>
            </>
            :
            <>
            <svg onClick={() => addFavorite(user.sub, recipe)} xmlns="http://www.w3.org/2000/svg" className="icon icon-heart" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" className="primaryHeart"/>
            <path className="secondaryHeart" d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z"/>
            </svg>
            </>
        }
        </>
     );
}
 
export default Heart;