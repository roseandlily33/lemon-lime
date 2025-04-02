import RecipeContainer2 from "../../../components/recipe/recipe2.container";
import PropTypes from "prop-types";
import React from "react";
import { SearchResultsDiv } from "./SearchResults.styles";

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
