import { useState } from 'react';
import SearchIcon from '../../images/icons/search-icon/icons8-search-48.png';
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
    <img src={SearchIcon} alt="search" onClick={searchForRecipe}/>
    </StyledDiv>
    <ResultsDiv>
        <RecentlySearched recent={recent} setRecent={setRecent} />
        <SearchResults results={results} />
    </ResultsDiv>
    </SearchContainer> );
}
 
export default SearchPage;