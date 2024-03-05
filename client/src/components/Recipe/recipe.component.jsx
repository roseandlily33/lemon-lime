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
    useEffect(() => {
        const GetFavorites = async() => {
            let recipes = await httpGetFavoritesForMainPage(user.sub);
            setUsersFave(recipes.favorites);
        }
        GetFavorites();
    }, [user]);

    const url = `recipe/${recipe._id}`;
    console.log('User faves', usersFave);
    return ( 
        <RecipeCont key={recipe._id}>
           <div>
           <TopContainer>
            <NavLink style={{color:'orange', textDecoration: 'none', fontSize: '1.516em', fontWeight: 'bold', textTransform: 'uppercase'}} to={url}>{recipe.recipeName}</NavLink>
            <>
            {/* The heart  */}
            {usersFave?.map((fave) => {
            let heartCount = 0;
            return (fave._id === recipe._id) ? 
            (   heartCount++ &&
                <DeleteHeart id={recipe._id} />
            )
            :  (heartCount >= 1) ? 
                <h6 style={{color: 'white'}}>0</h6>
                :
                <Heart id={recipe._id}/>    
            }
        )}
            
            </>
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
