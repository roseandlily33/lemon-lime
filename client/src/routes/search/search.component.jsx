import React, { useState } from "react";
import { ResultsDiv, StyledDiv, SearchContainer } from "./search.styles";
import SearchResults from "./results/searchResults.component";
import RecentlySearched from "./recent/recent.component";
import { httpSearchRecipes } from "../../hooks/recipeRequests";
import { useSelector } from "react-redux";
import IconButton from "../../components/Buttons/IconButton/IconButton.component";

const SearchPage = () => {
  const popularRecipes = useSelector((state) => state.recipes.popularRecipes);
  const [searching, setSearching] = useState("");
  const [recent, setRecent] = useState([]);
  const [results, setResults] = useState();
  const [alert, setAlert] = useState("");
  const [subCategory, setSubCategory] = useState("All");

  if (recent?.length > 5) {
    recent.shift();
  }

  const searchForRecipe = async () => {
    setAlert("");
    if (!searching) {
      setResults(popularRecipes);
      return;
    }
    let foundRecipes = await httpSearchRecipes(searching.trim(), subCategory);
    if (foundRecipes?.length === 0) {
      setAlert("No Recipes Found");
      setResults(popularRecipes);
    }
    setResults(foundRecipes);
    setRecent([...recent, searching]);
  };

  const seachForOldSearch = async (recipe) => {
    setAlert("");
    setSubCategory("All");
    const searching = await await httpSearchRecipes(recipe, "All");
    setResults(searching);
  };

  if (!results) {
    setResults(popularRecipes);
  }

  const handleChange = (e) => {
    const subCat = e.target.value;
    setSubCategory(subCat);
  };

  return (
    <SearchContainer>
      <StyledDiv className="boxShadow">
        <h2>Explore Recipes</h2>
        <form className="form">
          <div style={{ width: "100%" }}>
            <select
              style={{ width: "10%" }}
              name="subCategory"
              defaultValue={subCategory}
              onChange={handleChange}
            >
              <option default value={"All"}>
                All
              </option>
              <option value={"Breakfast"}>Breakfast</option>
              <option value={"Lunch"}>Lunch</option>
              <option value={"Dinner"}>Dinner</option>
              <option value={"Dessert"}>Dessert</option>
              <option value={"Drinks"}>Drinks</option>
            </select>
            <input
              type="text"
              placeholder="ice cream cake"
              name="searching"
              value={searching}
              onChange={(e) => setSearching(e.target.value)}
              required
            />{" "}
          </div>
          <IconButton
            functionName={searchForRecipe}
            span="Search"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="icon icon-search"
              >
                <circle cx="10" cy="10" r="7" className="primary" />
                <path
                  className="secondary"
                  d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                />
              </svg>
            }
          />
        </form>
        {alert && <span style={{ color: "#CF1124" }}>{alert}</span>}
        <RecentlySearched
          recent={recent}
          seachForOldSearch={seachForOldSearch}
        />
      </StyledDiv>
      <ResultsDiv>
        <SearchResults results={results} />
      </ResultsDiv>
    </SearchContainer>
  );
};

export default SearchPage;
