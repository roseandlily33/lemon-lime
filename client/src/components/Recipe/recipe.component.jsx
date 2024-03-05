import { RecipeCont } from "./recipe.styles";
import {formatDate} from '../../formattingUtils/date';
import {NavLink} from 'react-router-dom'; 
import Heart from "../../routes/favorites/addFave.component";
import DeleteHeart from '../../routes/favorites/deleteFave.component';
import Lemons from '../../images/lemons.jpg';
import { TopContainer } from "./recipe2.styles";
import { useEffect, useState } from 'react';
import { httpGetFavoritesForMainPage } from "../../hooks/userRequests";
import {useAuth0} from '@auth0/auth0-react';

const RecipeContainer = ({recipe}) => {
    const {user} = useAuth0();
    const [usersFave, setUsersFave] = useState();
    const [foundRecipe, setFoundRecipe] = useState();
   
    useEffect(() => {
        const GetFavorites = async() => {
            try{
                let recipes = await httpGetFavoritesForMainPage(user.sub);
                setUsersFave(recipes.favorites);
            } catch(err){
                alert('Error on getting faves')
            }
            finally{
                let foundRecipe = usersFave.find((f) => {
                    return f._id === recipe._id
                });
                setFoundRecipe(foundRecipe);
            }
        }
        GetFavorites();
    }, [user, recipe._id, usersFave]);

    const url = `recipe/${recipe._id}`;

    return ( 
        <RecipeCont key={recipe._id}>
           <div>
           <TopContainer>
            <NavLink style={{color:'orange', textDecoration: 'none', fontSize: '1.516em', fontWeight: 'bold', textTransform: 'uppercase'}} to={url}>{recipe.recipeName}</NavLink>
            {foundRecipe ? <DeleteHeart id={recipe._id} /> : <Heart id={recipe._id} /> }
            </TopContainer>
            <h4>{formatDate(recipe.createdAt)}</h4>
            <h4>Total Time: {recipe.totalTime.hours}:{recipe.totalTime.minutes}</h4>
            <h4>Favorites: {recipe.favorites}</h4>
            <h4>{recipe.subCategory}</h4>
           </div>
            <img src={Lemons} alt="lemons" />
        </RecipeCont>
     );
}
 
export default RecipeContainer;
