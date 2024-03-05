import { SideContainer, TopContainer } from "./recipe2.styles";
import {formatDate} from '../../formattingUtils/date';
import {NavLink} from 'react-router-dom'; 
import Lemons from '../../images/lemons.jpg';
import Heart from "../../routes/favorites/addFave.component";
import DeleteHeart from '../../routes/favorites/deleteFave.component';
import {useAuth0} from '@auth0/auth0-react';
import { useState, useEffect } from "react";
import { httpGetFavoritesForMainPage } from "../../hooks/userRequests";

const RecipeContainer2 = ({recipe}) => {
    const url = `/recipe/${recipe._id}`;
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

    return ( 
        <SideContainer key={recipe._id}>
           <div>
           <TopContainer>
           <NavLink style={{color:'orange', textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold', textTransform: 'uppercase'}} to={url}>{recipe.recipeName}</NavLink>
           {foundRecipe ? <DeleteHeart id={recipe._id} /> : <Heart id={recipe._id} /> }
           </TopContainer>
            <h4>{formatDate(recipe.createdAt)}</h4>
            <h4>Favorites: {recipe.favorites}</h4>
           
           </div>
            <img src={Lemons} alt="lemons" />
            
        </SideContainer>
     );
}
 
export default RecipeContainer2;