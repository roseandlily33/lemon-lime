import { useState, useEffect, useCallback } from "react";
import { httpGetFullRecipeWithDetails } from "../../hooks/requests";
import { useParams } from "react-router-dom";
const SingleRecipe = () => {
    const {id} = useParams();
     const[singleRecipe, setSingleRecipe] = useState({});
    
     const getSingleRecipe = useCallback(async() => {
        const fetchedrecipe = await httpGetFullRecipeWithDetails(id);
        setSingleRecipe(fetchedrecipe)
     }, [id]);

     useEffect(() => {
        getSingleRecipe()
     }, [getSingleRecipe, id]);


   
    return ( 
       <>
       {!singleRecipe ? <h3>Recipe is loading</h3>: 
        <div>
        <h3>Recipe Name: {singleRecipe[0].recipeName}</h3>
        <h3>Date: {singleRecipe[0].createdAt}</h3>
        <h4>{singleRecipe[0].cookTime}</h4>
        <h4>{singleRecipe[0].prepTime}</h4>
        <h3>Ingredients</h3>
        <ul>
       {
        singleRecipe[0].ingredients.map((item) => {
            return <li>{item}</li>
        })
       }
       </ul>
       <h3>Instructions</h3>
       <ul>
       {singleRecipe[0].instructions.map((item) => {
        return <li>{item}</li>
       })}
       </ul>
    </div>}
       
       
       
       </>
     );
}
 
export default SingleRecipe;