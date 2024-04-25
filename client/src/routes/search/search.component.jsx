import { useState } from 'react';
import { ResultsDiv, StyledDiv, SearchContainer } from "./search.styles";
import SearchResults from './results/searchResults.component';
import RecentlySearched from './recent/recent.component';
import { httpSearchRecipes } from '../../hooks/recipeRequests';
import { useSelector } from 'react-redux';

const SearchPage = () => {
    const popularRecipes = useSelector(state => state.recipes.popularRecipes);
    const [searching, setSearching] = useState('');
    const [recent, setRecent] = useState([]);
    const [results, setResults] = useState();
    const [alert, setAlert] = useState('');
    const [subCategory, setSubCategory] = useState('All');

    if(recent.length > 5){
        recent.shift();
    }

    const searchForRecipe = async() => {
        setAlert('');
        if(!searching){
            setResults(popularRecipes);
            return;
        }
        let foundRecipes = await httpSearchRecipes(searching.trim(), subCategory);
        console.log('Found these recipes', foundRecipes);
        if(foundRecipes.length === 0){
            setAlert('No Recipes Found');
            setResults(popularRecipes);
        }
        setResults(foundRecipes);
        setRecent([...recent, searching]);   
    }

    const seachForOldSearch = async(recipe) => {
        setAlert('');
        setSubCategory('All');
        let searching = await await httpSearchRecipes(recipe, 'All');
        setResults(searching);
    }

    if(!results){
        setResults(popularRecipes)
    }

    const handleChange = (e) => {
        const subCat = e.target.value;
        setSubCategory(subCat);
    }

    return ( <SearchContainer>
    <StyledDiv>
    <h2>Explore Recipes</h2>
    <div>
         <select style={{width: '10%'}} name="subCategory" defaultValue={subCategory} onChange={handleChange}>
          <option default value={"All"}>All</option>
          <option value={"Breakfast"}>Breakfast</option>
          <option value={"Lunch"}>Lunch</option>
          <option value={"Dinner"}>Dinner</option>
          <option value={"Dessert"}>Dessert</option>
          <option value={"Drinks"}>Drinks</option>
        </select>
    <input type="text" placeholder='ice cream cake' name="searching" value={searching} onChange={(e) => setSearching(e.target.value)} required/>
    <button className='buttonWithIcon' onClick={searchForRecipe}>
    Search
    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24" class="icon-search"><circle cx="10" cy="10" r="7" class="primary"/><path class="secondary" d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
    </button>
    </div>
    <span style={{color: '#CF1124'}}>{alert}</span>
    <RecentlySearched recent={recent} seachForOldSearch={seachForOldSearch} />
    </StyledDiv>
    <ResultsDiv>
        <SearchResults results={results} />
    </ResultsDiv>
   
    </SearchContainer> );
}
 
export default SearchPage;