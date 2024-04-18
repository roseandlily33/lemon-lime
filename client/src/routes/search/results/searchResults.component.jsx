import RecipeContainer2 from "../../../components/Recipe/recipe2.container";
import { SearchResultsContainer } from "./searchResults.styles";

const SearchResults  = ({results }) => {

    return ( 
      <>
        {/* <SearchResultsContainer> */}
        {results?.map((recipe) => {
          return  <RecipeContainer2 recipe={recipe} />
        })}
        {/* </SearchResultsContainer> */}
        </>
    );
}
 
export default SearchResults ;