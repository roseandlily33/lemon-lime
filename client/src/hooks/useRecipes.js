import { useCallback, useState, useEffect } from "react";
import { httpGetAllRecipes, httpGetFullRecipeWithDetails } from "./requests";

function useRecipes(){
    const [allRecipes, setAllRecipes] = useState([]);


    const getAllRecipes = useCallback(async() => {
        const allRecipes = await httpGetAllRecipes();
        setAllRecipes(allRecipes);
    }, []);
    useEffect(() => {
        getAllRecipes()
    }, [getAllRecipes]);


    return {
        allRecipes,
    }
}


export default useRecipes; 