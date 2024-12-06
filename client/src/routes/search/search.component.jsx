import React, { useState, useEffect, useMemo } from "react";
import { ResultsDiv, StyledDiv, SearchContainer } from "./search.styles";
import SearchResults from "./results/searchResults.component";
import RecentlySearched from "./recent/recent.component";
import IconButton from "../../components/Buttons/IconButton/IconButton.component";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSearchedRecipes,
  clearSearch,
  setAlert,
  setRecent,
} from "../../redux/searchSlice";
import Loader from "../../components/Loader/loader.component";

const SearchPage = () => {
  const popularRecipes = useSelector((state) => state.recipes.popularRecipes);
  const [searching, setSearching] = useState("");
  const [subCategory, setSubCategory] = useState("All");
  const [firstLoad, setFirstLoad] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSearch());
    dispatch(setAlert(""));
  }, [dispatch]);

  const { results, recent, isLoading, error, alert } = useSelector(
    (state) => state.search
  );

  const memoizedResults = useMemo(() => {
    return results.length ? results : popularRecipes;
  }, [results, popularRecipes]);

  useEffect(() => {
    if (results.length === 0 && !isLoading && !firstLoad) {
      dispatch(setAlert("No Recipes Found"));
    }
  }, [results, isLoading, dispatch]);

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(setRecent(searching));
    dispatch(setAlert(""));
    dispatch(fetchSearchedRecipes({ text: searching, category: subCategory }));
  };

  const searchForOldSearch = async (searching) => {
    dispatch(setAlert(""));
    setSubCategory("All");
    dispatch(fetchSearchedRecipes({ text: searching, category: subCategory }));
  };

  if (error) {
    return <h2>Something has gone wrong</h2>;
  }

  const handleChange = (e) => {
    const subCat = e.target.value;
    setSubCategory(subCat);
  };

  useEffect(() => {
    dispatch(setAlert(""));
    setFirstLoad(false);
  }, []);

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
            functionName={handleSearch}
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
        <span style={{ color: "#CF1124" }}>{alert}</span>
        <RecentlySearched
          recent={recent}
          seachForOldSearch={searchForOldSearch}
        />
      </StyledDiv>
      <ResultsDiv>
        {isLoading ? <Loader /> : <SearchResults results={memoizedResults} />}
      </ResultsDiv>
    </SearchContainer>
  );
};

export default SearchPage;
