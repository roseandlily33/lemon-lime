import { useState } from 'react';
import { ResultsDiv, StyledDiv, SearchContainer } from "./search.styles";
import SearchResults from './results/searchResults.component';
import RecentlySearched from './recent/recent.component';
import { httpSearchRecipes } from '../../hooks/recipeRequests';

const SearchPage = () => {
    const [searching, setSearching] = useState('');
    const [recent, setRecent] = useState([]);
    const [results, setResults] = useState();

    const searchForRecipe = async() => {
        let foundRecipes = await httpSearchRecipes(searching.trim());
        setResults(foundRecipes);
        setRecent([...recent, searching]);
    }

    if(recent.length > 5){
        recent.shift();
    }

    return ( <SearchContainer>
    <h2>Search For A Recipe</h2>
    <StyledDiv>
    <input type="text" placeholder='ice cream cake' name="searching" value={searching} onChange={(e) => setSearching(e.target.value)} required/>
    <button style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5em'}} onClick={searchForRecipe}>
    Search
<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24" class="icon-search"><circle cx="10" cy="10" r="7" class="primary"/><path class="secondary" d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
    </button>
    </StyledDiv>
    <ResultsDiv>
        <RecentlySearched recent={recent} />
        <SearchResults results={results} />
    </ResultsDiv>
    </SearchContainer> );
}
 
export default SearchPage;