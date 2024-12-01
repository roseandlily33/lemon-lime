import styled from "styled-components";

export const Navbar = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* flex-wrap: wrap; */
  padding: 1em;
  background-color: ${({ theme }) => theme.colors.white};
  @media screen and (width >= 360px) {
    height: 8vh;
  }
`;

export const RightNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
`;
