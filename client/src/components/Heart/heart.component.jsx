import DeleteHeart from "./deleteFave.component";
import AddHeart from "./addFave.component";
import { httpGetFavoritesForMainPage } from "../../hooks/userRequests";
import { useState, useEffect } from "react";
import {useAuth0} from '@auth0/auth0-react';


const Heart = ({recipe}) => {
    const {user} = useAuth0();
    const [usersFave, setUsersFave] = useState();
    const [foundRecipe, setFoundRecipe] = useState();


    useEffect(() => {
        const GetFavorites = async() => {
            try{
                let recipes = await httpGetFavoritesForMainPage(user.sub);
                setUsersFave(recipes.favorites);
        //                 Let cache = {}
        // Function memoFuncition(n){
        // if(n in cache){ return cache[n];}
        // Else { cache[n] = 5 + 80; return cache[n]}}
                let foundRecipe = await usersFave.find((f) => {
                    return f._id === recipe._id
                });
                setFoundRecipe(foundRecipe);
            } catch(err){
               // alert('Error on getting faves');
               console.log('Err', err)
            }
            // finally{
            //    if(usersFave){
               
            //    }
            // }
        }
        GetFavorites();
    }, [user, recipe._id, usersFave]);
    return ( 
        <>
        {foundRecipe ? <DeleteHeart id={recipe._id} /> : <AddHeart id={recipe._id} /> }
        </>
     );
}
 
export default Heart;