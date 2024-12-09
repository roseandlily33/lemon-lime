import styled from "styled-components";

//Responsive Design Done
export const OuterForm = styled.main`
  height: 100vh;
  width: 100vw;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const RecipeForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  margin-bottom: 1em;
  padding: 2rem;
  overflow-y: scroll;
  h2,
  h3 {
    margin-bottom: 0.5em;
    color: ${({ theme }) => theme.colors.green};
  }
  hr {
    margin-bottom: 1em;
  }
`;

export const TopForm = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1em;
  select {
    width: 10%;
  }
  input {
    width: 40%;
  }
  .each {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    margin-right: 4rem;
  }
`;

export const LeftDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  @media screen and (width >= 360px) {
    width: 100%;
  }
  @media screen and (width >= 768px) {
    width: 60%;
  }
`;

export const RightDiv = styled.div`
  width: auto;
  @media screen and (width >= 360px) {
    width: 100%;
    margin-top: 1rem;
    .cooking-image {
      height: 150px;
      width: 200px;
      float: left;
    }
  }
  @media screen and (width >= 768px) {
    width: 30%;
    margin-top: 0rem;
    .cooking-image {
      height: 250px;
      width: 250px;
      float: right;
    }
  }
`;

export const MiddleForm = styled.section`
  display: flex;
  flex-direction: column;
`;

export const BottomForm = styled.div`
  width: 100%;
  min-height: 20%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  .buttonContainer {
    margin-block: 1em;
  }
  .items {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0.5em;
    gap: 1em;
    height: 20%;
  }
  .items button {
    width: 100%;
    margin-top: 0.5em;
  }
  img {
    height: 150px;
    width: 250px;
  }
`;

//Form Elements
export const InputDiv = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  @media screen and (width >= 360px) {
    /* max-width: 100%; */
    flex-wrap: wrap;
    input {
      min-width: 100%;
      margin-block: 1rem;
    }
    button {
      min-width: 150px;
      float: right;
    }
  }
  @media screen and (width >= 768px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 1.5em;
    padding: 1rem;
    input {
      min-width: 50%;
      margin-block: 0;
    }
    button {
      width: inherit;
      float: none;
    }
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OptionsContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
`;

export const EachI = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  align-items: center;
  border-radius: 5px;
  margin-block: 1rem;
  padding: 1rem;
  justify-content: space-evenly;
  /* border: 1px solid red; */
  input {
    width: 100%;
  }
  .left {
    width: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .left h4 {
    color: ${({ theme }) => theme.colors.green};
    padding-right: 2rem;
  }
  .right {
    /* border: 1px solid green; */
    width: 25%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
  }
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-top: 5rem;
`;
