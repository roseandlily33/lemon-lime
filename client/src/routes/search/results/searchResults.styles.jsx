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

//Responsicve Styling Done
export const SearchResultsDiv = styled.div`
  margin-inline: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  > div {
    animation: ${fadeIn} 0.5s ease-in-out;
  }
`;
