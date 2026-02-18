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
export const RecipeCont = styled.div`
  background: linear-gradient(135deg, #f9f8f6 80%, #E3A445 100%);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  box-shadow: 0 4px 16px rgba(220, 180, 80, 0.10), 0 1.5px 6px rgba(160, 170, 45, 0.10);
  border: 1.5px solid #BCC456;
  transition: box-shadow 0.2s, border 0.2s;
  > div {
    animation: ${fadeIn} 0.5s ease-in-out;
  }
  &:hover {
    box-shadow: 0 6px 24px rgba(208, 65, 90, 0.13), 0 2px 8px rgba(161, 170, 45, 0.13);
    border: 2px solid #D0415A;
  }
  @media screen and (width >= 360px) {
    padding: 1rem;
    width: 100%;
    height: auto;
    .recipePhoto {
      height: 100%;
      max-height: 110px;
      min-height: 110px;
      width: 160px;
      border-radius: 8px;
      float: right;
      object-fit: cover;
      border: 1.5px solid #E3A445;
      background: #fffbe6;
    }
  }
  @media screen and (width >= 768px) {
    .recipePhoto {
      height: 100%;
      max-height: 150px;
      min-height: 150px;
      width: 250px;
      border-radius: 10px;
      float: right;
    }
  }
`;

export const TopLabel = styled.div`
  margin-bottom: 0.2rem;
`;

export const LeftContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-start;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.1rem;
  font-size: 1.25rem;
  font-weight: 500;
`;

export const IconText = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  color: #222;
  font-weight: 500;
`;

export const CategoryTag = styled.span`
  display: inline-flex;
  align-items: center;
  background: #f7e7c1;
  color: #A1AA2D;
  font-size: 1.15rem;
  font-style: italic;
  border-radius: 8px;
  padding: 0.2em 0.9em;
  margin-top: 0.2em;
  font-weight: 600;
`;
