import { useCallback, useState, useEffect } from "react";
import { httpGetAllRecipes } from "./requests";

function useRecipes(){
    const [allRecipes, setAllRecipes] = useState([]);

    const getAllRecipes = useCallback(async() => {
        const allRecipes = await httpGetAllRecipes();
        setAllRecipes(allRecipes);
    }, []);


    return {
        allRecipes, 
        getAllRecipes
    }
}

export default useRecipes; 