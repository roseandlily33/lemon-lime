import { useCallback, useState, useEffect } from "react";
import { httpGetAllRecipes } from "./requests";

function useRecipes(){
    const [allRecipes, setAllRecipes] = useState([]);

    const getAllRecipes = useCallback(async() => {
        const allRecipes = await httpGetAllRecipes();
        setAllRecipes(allRecipes);
        console.log('Inside function', allRecipes);
    }, []);
    useEffect(() => {
        getAllRecipes()
    }, [getAllRecipes]);


    return {
        allRecipes
    }
}


export default useRecipes; 