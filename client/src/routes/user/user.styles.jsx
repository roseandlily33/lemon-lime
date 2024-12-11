import styled from "styled-components";

export const UserContainer = styled.main`
  height: 100vh;
  width: 100vw;
  border: 1px solid red;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid orange;
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
  border: 1px solid green;
`;

export const UserOptions = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 20%;
  border: 1px solid purple;
`;

export const UserContentContainer = styled.div`
  display: flex;
  height: 80vh;
  border: 1px solid blue;
`;
