import styled from "styled-components";

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
  background-color: ${({ theme }) => theme.colors.white};
  min-width: 300px;
  height: auto;
  max-height: 350px;
  width: 300px;
  max-width: 300px;
  padding: 1em;
  border-radius: 5px;
  margin-top: 1rem;
  .recipePhoto {
    margin-top: 0.2em;
    width: 250px;
    max-width: 250px;
    border-radius: 5px;
    height: 100%;
    max-height: 150px;
    min-height: 150px;
  }
  .topDiv {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.3em;
  }
`;
