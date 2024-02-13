import RecipeContainer from "../../components/Recipe/recipe.component";
import { MainDiv, LeftMainDiv, RightMainDiv } from "./home.styles";
const HomePage = ({ allRecipes}) => {
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
        </RightMainDiv>
        </MainDiv>
    
       );
}
 
export default HomePage;