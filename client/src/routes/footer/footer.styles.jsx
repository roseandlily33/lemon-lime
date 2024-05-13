import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    background-color: ${({theme}) => theme.colors.white};
    /* gap: 2em; */
    /* align-items: center; */
    /* height: 10vh; */
    /* flex-wrap: wrap; */
    z-index: 10;
    /* position: sticky; */
    bottom: 0;
    width: 100%;
`;
