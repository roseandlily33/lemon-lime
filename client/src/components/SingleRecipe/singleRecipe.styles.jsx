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
    }
    h2{
        font-weight: bold;
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
    gap: 0.5em;
    padding: 0.5em;
    ul{
        background-color: ${({theme}) => theme.colors.white};
        border-radius: 5px;
    }
`;

export const Bottom = styled.div`
width: 100%;
padding: 0.5em;

h3{
    text-align: center;
    color: ${({theme}) => theme.colors.yellow};
}
ol{
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 5px;
    padding: 0.2em;
    border: 2px solid ${({theme}) => theme.colors.green};
}
li{
    margin-top: 0.5em;
}
@media screen and (max-width: 900px){
        flex-wrap: wrap;
        border: 2px solid orange;
    }
`;

export const IngredientsDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${({theme}) => theme.colors.white};
    gap: 1em;
    padding: 0.2em;
    border: 2px solid ${({theme}) => theme.colors.green};
    border-radius: 5px;
    
    ul {
        list-style-type: none;
        padding: 0.2em;   
    }
    li{
        margin-top: 0.5em;
    }
`;