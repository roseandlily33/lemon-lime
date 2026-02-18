import styled from "styled-components";

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1em;
  border-radius: 12px;
  border: 1.5px solid #BCC456;
  margin-top: 1em;
  max-height: 400px;
  box-shadow: 0 4px 16px rgba(220, 180, 80, 0.10), 0 1.5px 6px rgba(160, 170, 45, 0.10);
  transition: box-shadow 0.2s, border 0.2s;
  &:hover {
    box-shadow: 0 6px 24px rgba(208, 65, 90, 0.13), 0 2px 8px rgba(161, 170, 45, 0.13);
    border: 2px solid #D0415A;
  }
  img {
    margin-top: 0.2em;
    height: 150px;
    width: 240px;
    max-width: 250px;
    max-height: 150px;
    border-radius: 10px;
    object-fit: cover;
    border: 1.5px solid #E3A445;
    background: #fffbe6;
  }
`;

export const ButtonRecipeContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  gap: 0.5em;
`;
