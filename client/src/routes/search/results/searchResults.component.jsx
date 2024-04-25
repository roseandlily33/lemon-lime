import RecipeContainer2 from "../../../components/Recipe/recipe2.container";
import { SearchResultsDiv } from "./searchResults.styles";

const SearchResults  = ({results }) => {

    return ( 
      <SearchResultsDiv>
        {results?.map((recipe) => {
          return  <RecipeContainer2 recipe={recipe} />
        })}
      </SearchResultsDiv>
    );
}
 
export default SearchResults ;