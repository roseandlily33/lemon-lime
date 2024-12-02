import RecipeContainer2 from "../../../components/Recipe/Recipe2.container";
import { SearchResultsDiv } from "./SearchResults.styles";

const SearchResults = ({ results }) => {
  return (
    <SearchResultsDiv className="scrollBar">
      {results?.map((recipe) => {
        return <RecipeContainer2 recipe={recipe} />;
      })}
    </SearchResultsDiv>
  );
};

export default SearchResults;
