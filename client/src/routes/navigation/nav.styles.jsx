import styled from 'styled-components';

export const Navbar = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    background-color: ${({theme}) => theme.colors.white};
    
    /* @media screen and (max-width: 500px){
        gap: 1em;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
    } */
    @media screen and (width >= 360px){ 
        border: 1px solid red;
        height: 8vh;

  }
  @media screen and (width >= 768px){ 
        border: 1px solid purple;
       // width: 70%;

    }
  @media screen and (width >= 1100px){ 
        border: 1px solid green;
    }
`;

export const RightNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
`;
