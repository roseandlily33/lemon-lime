import styled from "styled-components";

//Responsive Styling Done
export const SearchContainer = styled.main`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 1em;
  align-items: center;
  height: auto;
`;

export const StyledDiv = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  gap: 1.5em;
  width: 80%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  margin: 1.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  }

  h2 {
    color: ${({ theme }) => theme.colors.green};
    font-size: 1.8rem;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.darkGreen};
    }
  }

  div {
    display: flex;
    gap: 2em;
    width: 80%;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 80%;
    transition: all 0.3s ease;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

  input {
    padding: 0.8rem;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.colors.green};
    width: 100%;
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;

    &:focus {
      border-color: ${({ theme }) => theme.colors.yellow};
      box-shadow: 0px 0px 8px ${({ theme }) => theme.colors.yellow};
    }
  }

  button {
    width: 150px;
    padding: 0.8rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      transform 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkGreen};
      transform: scale(1.05);
    }
  }
`;

export const ResultsDiv = styled.aside`
  height: 100vh;
  min-width: 100vw;
  height: 100%;
  overflow-y: scroll;
`;
