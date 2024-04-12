import styled from 'styled-components';

export const SearchResultsContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    margin-inline: 1em;
    div{
        height: 35%;
    }
    @media screen and (max-width: 900px){
        flex-wrap: wrap;
        justify-content: center;
    }
`;