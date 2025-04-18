import styled from "styled-components";

// prettier-ignore
export const UserContainer = styled.main`
  height: 100vh;
  width: 100vw;
  /* border: 1px solid red; */
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  /* border: 1px solid orange; */
  background-color: hsla(9.16, 92.3%, 69.4%, 0.2);
`;

export const UserOptionsContainer = styled.section`
  border: 1px solid orange;
  @media screen and (width >= 360px) {
    .imgDiv img {
      height: 30%;
      width: 100%;
    }
  }
  @media screen and (width >= 768px) {
    .imgDiv img {
      height: 20%;
      width: 100%;
    }
  }
  @media screen and (width >= 1000px) {
    .imgDiv img {
      height: 400px;
      width: 100%;
    }
  }
`;
export const UserRecipesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  gap: 1rem;
  overflow-y: scroll;
  padding: 1rem;
  height: 100%;
  /* border: 1px solid green; */
  @media screen and (width <= 768px) {
    width: 100%;
  }
`;

export const UserOptions = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 20%;
  /* border: 1px solid purple; */
  margin-top: 1.5rem;
  button {
    margin: 0.5rem;
  }
  @media screen and (width <= 768px) {
    flex-direction: row;
    width: 100%;
    margin-top: 0;
    button {
      padding: 1rem;
    }
  }
`;

export const UserContentContainer = styled.div`
  display: flex;
  height: 80vh;
  /* border: 1px solid blue; */
  @media screen and (width <= 768px) {
    flex-direction: column;
  }
`;
