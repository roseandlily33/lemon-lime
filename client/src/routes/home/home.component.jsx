import RecipeContainer from "../../components/Recipe/recipe.component";
import RecipeContainer2 from "../../components/Recipe/recipe2.container";
import { MainDiv, LeftMainDiv, RightMainDiv } from "./home.styles";

const HomePage = ({ allRecipes, popularRecipes}) => {
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