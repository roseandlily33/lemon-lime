import styled from 'styled-components';

export const SearchContainer = styled.section`
    height: 100vh;
    width: 100vw;  
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block: 1rem;
    padding-left: 1rem;
    gap: 2em;
    width: 90%;
    height: 30%;
    background-color: ${({theme}) => theme.colors.white};    
    border-radius: 5px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    div{
        display: flex;
        gap: 2em;
        width: 80%;
    }
`;

export const ResultsDiv = styled.div`
    height: 100vh;
    width: 100vw; 
    margin: 1em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1em;
    gap: 1em;
    align-items: start;
`;