// import { useCallback, useState, useEffect } from "react";
// import { httpGetAllRecipes, httpGetPopularRecipes } from "./recipeRequests";

// async function useRecipes(){
//     const [allRecipes, setAllRecipes] = useState([]);
//     const [popularRecipes, setPopularRecipes] = useState([]);

//     const getAllRecipes = useCallback(async() => {
//         const allRecipes = await httpGetAllRecipes();
//         setAllRecipes(allRecipes);
//     }, []);

//     useEffect(() => {
//         getAllRecipes()
//     }, [getAllRecipes]);

//     const getPopularRecipes = useCallback(async() => {
//         const allRecipes = await httpGetPopularRecipes()
//         setPopularRecipes(allRecipes);
//     }, []);
    
//     useEffect(() => {
//         getPopularRecipes()
//     }, [getPopularRecipes]);
    
//     return {
//         allRecipes,
//         popularRecipes
//     }
// }


// export default useRecipes; 