import styled from 'styled-components';

export const SearchResultsContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    height: 100vh;
    overflow-y: scroll;
    div{
        height: 35%;
        border: 1px solid orange;
    }
    @media screen and (max-width: 900px){
        flex-wrap: wrap;
        justify-content: center;
    }
`;