import React, { useState, useEffect, useMemo } from "react";
import { ResultsDiv, StyledDiv, SearchContainer } from "./search.styles";
import SearchResults from "./results/SearchResultsPage.component";
import RecentlySearched from "./recent/RecentPage.component";
import IconButton from "../../components/buttons/icon-button/IconButton.component";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSearchedRecipes,
  clearSearch,
  setAlert,
  setRecent,
} from "../../redux/searchSlice";
import Loader from "../../components/loader/Loader.component";
import SearchIcon from "../../images/icons/SearchIcon.icon";

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
            svg={<SearchIcon />}
          />
        </form>
        <span className="error">{alert}</span>
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
