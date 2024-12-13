import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  a {
    color: ${({ theme }) => theme.colors.green};
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.peach};
    }
  }
`;
