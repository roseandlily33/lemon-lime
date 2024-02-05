import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    background-color: ${({theme}) => theme.colors.white};
    gap: 2em;
    align-items: center;
    height: 100px;
    flex-wrap: wrap;
`;
