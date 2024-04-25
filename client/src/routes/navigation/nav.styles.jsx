import styled from 'styled-components';

export const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    background-color: ${({theme}) => theme.colors.white};
    @media screen and (max-width: 500px){
        gap: 1em;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
`;

export const RightNav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
`;
