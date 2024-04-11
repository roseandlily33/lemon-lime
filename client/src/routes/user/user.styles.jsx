import styled from 'styled-components';

export const UserContainer = styled.div`
    height: 100vh;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
`;
export const UserRecipesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1em;
  
    flex-wrap: wrap;
    border: 1px solid green;
    @media screen and (max-width: 900px){
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
`;

export const UserOptionsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    //border: 1px solid orange;
    @media screen and (max-width: 900px){
        flex-wrap: wrap;
        flex-direction: column;
        gap: 0.4em;
    }
    h2{
        color: ${({theme}) => theme.colors.green};

    }
    img{
        width: 100vw;
        height: 50vh;
        z-index: -1;
        position: relative;

    }
`;


