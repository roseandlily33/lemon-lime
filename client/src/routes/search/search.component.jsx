import { useState } from 'react';
import SearchIcon from '../../images/icons/search-icon/icons8-search-48.png';
import { ResultsDiv, StyledDiv } from "./search.styles";
import SearchResults from './results/searchResults.component';
import RecentlySearched from './recent/recent.component';

const SearchPage = () => {
    const [searching, setSearching] = useState('');
    const [recent, setRecent] = useState([]);
    const [results, setResults] = useState();
    return ( <>
    <h2>Search For A Recipe</h2>
    <StyledDiv>
    <input type="text" name="searching" value={searching} onChange={(e) => setSearching(e.target.value)} required/>
    <img src={SearchIcon} alt="search" />
    </StyledDiv>
    <ResultsDiv>
        <h3>Recipes go here</h3>
        <RecentlySearched recent={recent} setRecent={setRecent} />
        <SearchResults results={results} />
    </ResultsDiv>
    </> );
}
 
export default SearchPage;