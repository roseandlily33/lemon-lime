import Input from "../../components/InputComponent/input.component";
import SearchIcon from '../../images/icons/search-icon/icons8-search-48.png';
import { ResultsDiv, StyledDiv } from "./search.styles";
const SearchPage = () => {
    return ( <>
    <h2>Search For A Recipe</h2>
    <StyledDiv>
    <Input />
    <img src={SearchIcon} alt="search" />
    </StyledDiv>
    <ResultsDiv>
        <h3>results</h3>
    </ResultsDiv>
    </> );
}
 
export default SearchPage;