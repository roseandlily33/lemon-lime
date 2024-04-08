import RecipeContainer from "../../components/Recipe/recipe.component";
import RecipeContainer2 from "../../components/Recipe/recipe2.container";
import { MainDiv, LeftMainDiv, RightMainDiv } from "./home.styles";
//import useRecipes from "../../hooks/mainPageRecipes";
import { useCallback, useState, useEffect, useMemo } from "react";
// import { httpGetAllRecipes, httpGetPopularRecipes } from "../../hooks/recipeRequests";
import { useSelector } from "react-redux";


const HomePage = () => {
    const popularRecipes = useSelector(state => state.recipes.popularRecipes);
    console.log('POPULAR RECIPES', popularRecipes)

    // const {
    //     allRecipes,
    //     popularRecipes
    //   } = useRecipes();
    const [allRecipes, setAllRecipes] = useState([]);
   // const [popularRecipes, setPopularRecipes] = useState([]);
 




    // const getAllRecipes = useCallback(async() => {
    //     const allRecipes = await httpGetAllRecipes();
    //     setAllRecipes(allRecipes);
    // }, []);

    // useEffect(() => {
    //     getAllRecipes()
    // }, [getAllRecipes]);

    // const getPopularRecipes = useCallback(async() => {
    //     const allRecipes = await httpGetPopularRecipes()
    //     setPopularRecipes(allRecipes);
    // }, []);
    
    // useEffect(() => {
    //     getPopularRecipes()
    // }, [getPopularRecipes]);
    return (
        <MainDiv>
        <LeftMainDiv>
            <h2>New Recipes</h2>
            {
                allRecipes?.map((recipe) => {
                    return <RecipeContainer recipe={recipe} /> 
                })
            }
        </LeftMainDiv>
        <RightMainDiv>
            <h2>Popular Recipes</h2>
            {
                popularRecipes?.map((recipe) => {
                    return <RecipeContainer2 recipe={recipe} /> 
                })
            }
        </RightMainDiv>
        </MainDiv>
       );
}
 
export default HomePage;