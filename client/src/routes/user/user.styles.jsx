import styled, { keyframes } from "styled-components";

// Animation for Sidebar hover effect
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;


export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Sidebar = styled.aside`
  width: 25%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  box-shadow: var(--boxShadow);
  animation: ${slideIn} 0.5s ease-out;
  border-right: 12px solid var(--yellow);
  // make it transparent
  background-color: rgba(255, 255, 255, 0.4);
  .options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
  button {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    border-right: none;
  }
`;

export const UserInfo = styled.div`
  text-align: center;
  .profile-img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 5px solid var(--yellow);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      border-color: var(--lightGreen);
    }
  }

  h2 {
    font-family: "Poppins", sans-serif;
    color: var(--darkOrange);
    margin-top: 1rem;
  }
`;

export const UserInfoCard = styled.div`
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

export const MainContent = styled.main`
  width: 75%;
  padding: 2rem;
  overflow-y: auto;
  border-radius: 20px;
  box-shadow: var(--boxShadowHover);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  input {
    flex: 1;
    padding: 0.5rem;
    border-radius: 10px;
    border: 2px solid var(--yellow);
    background-color: white;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      border-color: var(--lightGreen);
    }
  }
`;

export const SearchCard = styled.div`
  background-color: #f9f871;
  padding: 2rem;
  border-radius: 20px;
  width: 100%;
  max-width: 600px;
`;

export const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
  overflow-y: auto;

  div {
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
      box-shadow: var(--boxShadowHover);
    }
  }
`;

export const RecipeCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  width: 100%;
`;

export const Header = styled.header`
  background-color: #ffcccb;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
`;
