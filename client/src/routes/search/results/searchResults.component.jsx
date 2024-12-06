import RecipeContainer2 from "../../../components/Recipe/recipe2.container";
import PropTypes from "prop-types";
import React from "react";
import { SearchResultsDiv } from "./searchResults.styles";

const SearchResults = ({ results = [] }) => {
  return (
    <SearchResultsDiv className="scrollBar">
      {results?.map((recipe) => {
        return <RecipeContainer2 key={recipe?._id} recipe={recipe} />;
      })}
    </SearchResultsDiv>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
