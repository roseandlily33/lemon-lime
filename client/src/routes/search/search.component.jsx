import Input from "../../components/InputComponent/input.component";
import SearchIcon from '../../images/icons/search-icon/icons8-search-48.png';
import { ResultsDiv, StyledDiv } from "./search.styles";
import RecipeContainer from "../../components/Recipe/recipe.component";
const SearchPage = () => {
    return ( <>
    <h2>Search For A Recipe</h2>
    <StyledDiv>
    <Input />
    <img src={SearchIcon} alt="search" />
    </StyledDiv>
    <ResultsDiv>
        <RecipeContainer />
        <RecipeContainer />
        <RecipeContainer />
    </ResultsDiv>
    </> );
}
 
export default SearchPage;