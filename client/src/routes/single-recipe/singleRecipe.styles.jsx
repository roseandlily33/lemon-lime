import styled, { keyframes } from "styled-components";

// Keyframes for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SingleRecipeContainer = styled.main`
  height: auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-block: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  animation: ${fadeIn} 0.5s ease-in-out;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.colors.boxShadowHover};
    transform: scale(1.02);
  }
`;

export const TopDiv = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2em;
  animation: ${fadeIn} 0.5s ease-in-out;

  @media screen and (width >= 360px) {
    flex-wrap: wrap-reverse;
  }
  @media screen and (width >= 800px) {
    flex-wrap: nowrap;
  }
`;

export const LeftSide = styled.aside`
  img {
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: ${({ theme }) => theme.colors.boxShadowHover};
    }
  }

  @media screen and (width >= 360px) {
    img {
      height: 200px;
      width: 100%;
    }
  }
  @media screen and (width >= 768px) {
    img {
      height: 300px;
      width: 400px;
    }
  }
`;

export const RightSide = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.7em;
  padding: 0.5em;

  h2 {
    color: ${({ theme }) => theme.colors.green};
    font-weight: bold;
    text-transform: capitalize;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.darkGreen};
    }
  }

  .userLink {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 700;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.peachyPink};
    }
  }
`;

export const Bottom = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  gap: 2em;
  margin-block: 2em;
  border-radius: 10px;
  animation: ${fadeIn} 0.5s ease-in-out;

  h4 {
    font-weight: bold;
    padding-inline: 0.6rem;
    color: ${({ theme }) => theme.colors.white};
    padding-block: 1rem;
    background-color: ${({ theme }) => theme.colors.mediumGreen};
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkGreen};
    }
  }
`;

export const IngredientsDiv = styled.div`
  border-radius: 10px;
  min-width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.offWhite};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.lightGreen};
    box-shadow: ${({ theme }) => theme.colors.boxShadowHover};
  }

  .outside {
    display: flex;
    margin: 0.5rem;
  }

  .insideIng1 {
    display: flex;
    margin-bottom: 1rem;
  }

  .insideIng1 p {
    padding-top: 0.4em;
  }

  .ing2 p {
    padding-left: 1em;
    padding-top: 0.4em;
    margin-bottom: 1rem;
    min-width: 100%;
  }
`;

export const InstructionsDiv = styled.div`
  border-radius: 10px;
  min-width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.offWhite};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.lightYellow};
    box-shadow: ${({ theme }) => theme.colors.boxShadowHover};
  }

  ol {
    margin: 0.5em;
  }

  p {
    padding-top: 0.4em;
    margin-bottom: 1rem;
  }
`;
