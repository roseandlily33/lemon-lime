import styled from 'styled-components';

export const SearchResultsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    gap: 1em;
    margin-inline: 1em;
    margin-block: 1em;
    @media screen and (max-width: 900px){
        flex-wrap: wrap;
        justify-content: center;
     
    }
`;