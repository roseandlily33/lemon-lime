import styled from "styled-components";

export const SingleRecipeContainer = styled.main`
  height: auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-block: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 1rem;
`;

export const TopDiv = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2em;
  @media screen and (width >= 360px) {
    flex-wrap: wrap-reverse;
  }
  @media screen and (width >= 800px) {
    flex-wrap: nowrap;
  }
`;

export const LeftSide = styled.aside`
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
  }
  .userLink {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.peachyPink};
    font-weight: 700;
  }
`;

export const Bottom = styled.section`
  width: 100%;
  display: flex;
  height: auto;
  gap: 2em;
  margin-block: 2em;
  border-radius: 5px;
  h4 {
    font-weight: bold;
    padding-inline: 0.6rem;
    color: ${({ theme }) => theme.colors.white};
    padding-block: 1rem;
    background-color: hsla(349, 43%, 66%, 0.5);
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }
  @media screen and (width >= 360px) {
    flex-wrap: wrap;
  }
  @media screen and (width >= 768px) {
    // border: 1px solid orange;
    flex-wrap: nowrap;
  }
  @media screen and (width >= 1000px) {
    // border: 1px solid pink;
  }
`;

export const IngredientsDiv = styled.div`
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.offWhite};
  .outside {
    display: flex;
    width: 90%;
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
  }
  @media screen and (width >= 360px) {
    width: 100%;
  }
  @media screen and (width >= 768px) {
    width: 30%;
  }
`;

export const InstructionsDiv = styled.div`
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.offWhite};
  ol {
    margin: 0.5em;
  }
  p {
    padding-top: 0.4em;
    margin-bottom: 1rem;
  }
  @media screen and (width >= 360px) {
    width: 100%;
  }
  @media screen and (width >= 768px) {
    width: 70%;
  }
`;
