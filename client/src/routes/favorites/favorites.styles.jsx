import styled from 'styled-components';

export const FavoritesContainer = styled.div`
    z-index: 3;
    padding: 0.5em;
    img{
        height: 25px;
        width: 25px;
    }
`;

export const FavoritesContainerMain = styled.section`
    width: 100vw;
    height: 100vh;
    h2{
        text-align: center;
    }
`;

export const FavoritesRecipesDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 1em;
`;
