import RecipeContainer from "../../components/Recipe/recipe.component";
import RecipeContainer2 from "../../components/Recipe/recipe2.container";
import { MainDiv, LeftMainDiv, RightMainDiv } from "./home.styles";
const HomePage = ({ allRecipes, popularRecipes}) => {
    return (
        <MainDiv>
        <LeftMainDiv>
            <h2>New Recipes</h2>
            {
                allRecipes.map((recipe) => {
                    return <RecipeContainer recipe={recipe} /> 
                })
            }
        </LeftMainDiv>
        <RightMainDiv>
            <h2>Popular Recipes</h2>
            {
                popularRecipes.map((recipe) => {
                    return <RecipeContainer2 recipe={recipe} /> 
                })
            }
        </RightMainDiv>
        </MainDiv>
    
       );
}
 
export default HomePage;