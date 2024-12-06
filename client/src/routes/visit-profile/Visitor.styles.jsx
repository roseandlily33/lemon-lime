import styled from "styled-components";

//Responsive Styling Done
export const VisitorContainer = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  @media screen and (width <= 1100px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (width >= 1100px) {
    flex-direction: row;
    align-items: start;
  }
`;
export const LeftContainer = styled.aside`
  @media screen and (width >= 360px) {
    display: none;
  }
  @media screen and (width >= 1100px) {
    display: contents;
    img {
      height: 100vh;
    }
  }
`;
export const RightContainer = styled.section`
  height: auto;
  margin: 1rem;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.white};
  @media screen and (width >= 360px) {
    flex-direction: column;
    width: 90%;
  }
  @media screen and (width >= 1100px) {
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
`;
export const UsersInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
  border-radius: 5px;
  h2 {
    color: ${({ theme }) => theme.colors.peachyPink};
  }
  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
`;
export const UserOptions = styled.div`
  display: flex;
  height: 5%;
  gap: 1rem;
  border-radius: none;
  background-color: ${({ theme }) => theme.colors.white};
  h3 {
    background-color: ${({ theme }) => theme.colors.offWhite};
    color: ${({ theme }) => theme.colors.darkGrey};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 1.3rem;
  }
  .selected {
    background-color: ${({ theme }) => theme.colors.peachyPink};
    color: ${({ theme }) => theme.colors.white};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 1rem;
  }
`;

export const UsersRecipes = styled.div`
  height: auto;
  overflow-y: scroll;
`;
export const UserRecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-top: 10px solid ${({ theme }) => theme.colors.peachyPink};
  padding: 2rem;
  overflow-y: scroll;
  height: 80%;
`;
