import styled from 'styled-components';

export const Navbar = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    background-color: ${({theme}) => theme.colors.white};
    @media screen and (max-width: 500px){
        gap: 1em;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
`;

export const RightNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
`;
