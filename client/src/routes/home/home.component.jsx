import RecipeContainer from "../../components/Recipe/recipe.component";
import RecipeContainer2 from "../../components/Recipe/recipe2.container";
import { MainDiv, LeftMainDiv, RightMainDiv } from "./home.styles";
//import useRecipes from "../../hooks/mainPageRecipes";
import { useCallback, useState, useEffect } from "react";
import { httpGetAllRecipes, httpGetPopularRecipes } from "../../hooks/recipeRequests";
const HomePage = () => {
    // const {
    //     allRecipes,
    //     popularRecipes
    //   } = useRecipes();
    const [allRecipes, setAllRecipes] = useState([]);
    const [popularRecipes, setPopularRecipes] = useState([]);

    const getAllRecipes = useCallback(async() => {
        const allRecipes = await httpGetAllRecipes();
        setAllRecipes(allRecipes);
    }, []);

    useEffect(() => {
        getAllRecipes()
    }, [getAllRecipes]);

    const getPopularRecipes = useCallback(async() => {
        const allRecipes = await httpGetPopularRecipes()
        setPopularRecipes(allRecipes);
    }, []);
    
    useEffect(() => {
        getPopularRecipes()
    }, [getPopularRecipes]);
    return (
        <MainDiv>
        <LeftMainDiv>
            <h1>New Recipes</h1>
            {
                allRecipes?.map((recipe) => {
                    return <RecipeContainer recipe={recipe} /> 
                })
            }
        </LeftMainDiv>
        <RightMainDiv>
            <h1>Popular Recipes</h1>
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