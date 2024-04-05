import styled from 'styled-components';

export const SingleRecipeContainer  = styled.section`
    height: auto;
    width: 95%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    h1{
       color: ${({theme}) => theme.colors.orange};
       font-weight: bold;
       text-transform: uppercase;
       padding-bottom: 0.3rem;
       border-bottom: 1px solid ${({theme}) => theme.colors.grey3};
    }
    h2{
        font-weight: bold;
        padding-block: 0.6rem;
        color: ${({theme}) => theme.colors.darkGrey};
    }
    @media screen and (max-width: 900px){
        border: 2px solid orange;
    }
`;

export const TopDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 900px){
        flex-wrap: wrap-reverse;
        border: 2px solid orange;
    }
`;

export const LeftSide = styled.div`
    img{
        height: 300px;
        width: 400px;
        
    }
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.7em;
    padding: 0.5em;
    ul{
        background-color: ${({theme}) => theme.colors.white};
        border-radius: 5px;
    }
`;

export const Bottom = styled.div`
width: 100%;
padding-top: 1em;
border: 1px solid green;
@media screen and (max-width: 900px){
        flex-wrap: wrap;
        border: 2px solid orange;
    }
`;

export const IngredientsDiv = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid red;
    background-color: ${({theme}) => theme.colors.white};

    gap: 1em;
    padding: 0.2em;
    border-radius: 5px;
    margin-block: 0.5em;
    
    ul {
        list-style-type: none;
        padding: 0.4em;   
    }
    li{
        margin-top: 1em;
    }
`;

export const InstructionsDiv = styled.div`
border: 1px solid orange;
    gap: 1em;
    padding: 0.4em;
    border-radius: 5px;
    margin-block: 0.5em;
    background-color: ${({theme}) => theme.colors.white};
    ul {
        list-style-type: none;
        padding: 0.4em;   
    }
    li{
        margin-top: 1em;
    }
`