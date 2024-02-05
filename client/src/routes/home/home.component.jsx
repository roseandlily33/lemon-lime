import RecipeContainer from "../../components/Recipe/recipe.component";
import { MainDiv, LeftMainDiv, RightMainDiv } from "./home.styles";
const HomePage = () => {
    return (
        <MainDiv>
        <LeftMainDiv>
            <h2>New Recipes</h2>
            <RecipeContainer /> 
            <RecipeContainer /> 
            <RecipeContainer /> 
            <RecipeContainer /> 
            <RecipeContainer /> 

        </LeftMainDiv>
        <RightMainDiv>
            <h2>Popular Recipes</h2>
        </RightMainDiv>
        </MainDiv>
    
       );
}
 
export default HomePage;