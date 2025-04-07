import RecipeContainer2 from "../../../components/recipe/Recipe2.component";
import PropTypes from "prop-types";
import React from "react";
import { SearchResultsDiv } from "./searchResults.styles";

const SearchResults = React.memo(({ results = [] }) => {
  return (
    <SearchResultsDiv className="scrollBar">
      {results?.map((recipe) => {
        return <RecipeContainer2 key={recipe?._id} recipe={recipe} />;
      })}
    </SearchResultsDiv>
  );
});

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

SearchResults.displayName = "SearchResults";

export default SearchResults;
