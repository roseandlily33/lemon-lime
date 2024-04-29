import styled from 'styled-components';

//Responsive Styling Done
export const SearchContainer = styled.main`
    height: 100vh;
    width: 100vw;  
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 1em;
    align-items: center;
    height: auto;
    /* @media screen and (width >= 360px){
        border: 2px solid red; 
    }
    @media screen and (width >= 768px){
        border: 2px solid purple;
    }
    @media screen and (width >= 1100px){
        border: 2px solid green;
    } */
`;

export const StyledDiv = styled.section`
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
    h2{
        color: ${({theme}) => theme.colors.green};  
    }
    div{
        display: flex;
        gap: 2em;
        width: 80%;
    }
    @media screen and (width >= 360px){
        .form{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        button{
            width: 150px;
        }
    }
    @media screen and (width >= 768px){
       .form{
        flex-direction: row;
       }
       input{
        width: 100%;
       }
    }
`;

export const ResultsDiv = styled.aside`
    height: 100vh;
    width: 100vw; 
    @media screen and (width >= 360px){
        border: 2px solid red;  
    }
    @media screen and (width >= 768px){
        border: 2px solid purple;
    }
    @media screen and (width >= 1100px){
        border: 2px solid green;
    }
`;