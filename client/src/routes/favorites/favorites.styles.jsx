import styled from "styled-components";

export const FavoritesContainerMain = styled.main`
  width: 100vw;
  height: 100vh;
  margin-top: 2rem;
  h1 {
    //padding-left: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.peachyPink};
  }
`;

export const FavoritesRecipesDiv = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  flex-wrap: wrap;
  gap: 1em;
  height: auto;
`;
