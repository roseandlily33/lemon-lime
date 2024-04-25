import styled from 'styled-components';

export const SearchContainer = styled.section`
    height: 100vh;
    width: 100vw;  
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 1em;
    align-items: center;
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block: 1rem;
    padding-left: 1rem;
    gap: 1em;
    width: 80%;
    height: 20%;
    background-color: ${({theme}) => theme.colors.white};    
    border-radius: 5px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    h2{
        color: ${({theme}) => theme.colors.green};  
    }
    div{
        display: flex;
        gap: 2em;
        width: 80%;
    }
    @media screen and (max-width: 500px){
        width: 90%;
        height: auto;
        input{
            width: 200px;
        }
        div{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
`;

export const ResultsDiv = styled.div`
    height: 100vh;
    width: 100vw; 
`;