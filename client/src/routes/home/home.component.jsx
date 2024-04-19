import RecipeContainer from "../../components/Recipe/recipe.component";
import RecipeContainer2 from "../../components/Recipe/recipe2.container";
import { MainDiv, BottomDiv, LeftMainDiv, RightMainDiv, HeroImage } from "./home.styles";
//import useRecipes from "../../hooks/mainPageRecipes";
//import { useCallback, useState, useEffect, useMemo } from "react";
// import { httpGetAllRecipes, httpGetPopularRecipes } from "../../hooks/recipeRequests";
import { useSelector } from "react-redux";
import MainPicture from '../../images/Background2.jpg';
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/loader.component";

const HomePage = () => {
    const popularRecipes = useSelector(state => state.recipes.popularRecipes);
    const newestRecipes = useSelector(state => state.recipes.newestRecipes);
    const loading = useSelector(state => state.recipes.isLoading);
    const loading2 = useSelector(state => state.recipes.isLoading2);
    const navigate = useNavigate();
    return (
        <MainDiv>
        <HeroImage>
            <div className="overlay">
            <img src={MainPicture} alt="Main Lemons" />
            </div>
            <div className="text">
                <h2>Discover your new</h2>
                <br />
                <h2 style={{color: 'hsl(29, 80%, 44%)'}}>Favorite Recipes</h2>
                <button onClick={() => navigate('search')}>Find Recipes</button>
            </div>
        </HeroImage>
       <BottomDiv>
        <LeftMainDiv>
            <h2>New Recipes</h2>
            {
                loading ? <Loader /> :
                <>
                {
                    newestRecipes?.map((recipe) => {
                        return <RecipeContainer recipe={recipe} /> 
                    })
                }
                </>
            }
        </LeftMainDiv>
        <RightMainDiv>
            <h2>Popular Recipes</h2>
           {
            loading2 ? <Loader />: 
            <>
             {
                popularRecipes?.map((recipe) => {
                    return <RecipeContainer2 recipe={recipe} /> 
                })
            }
            </>
           }
        </RightMainDiv>
        </BottomDiv>
        </MainDiv>
       );
}
 
export default HomePage;