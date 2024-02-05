import styled from 'styled-components';

export const MainDiv = styled.main`
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 90%;
    gap: 1em;
    @media screen {
        flex-wrap: wrap-reverse;
    }

`;

export const LeftMainDiv = styled.div`
    width: 60%;
`;

export const RightMainDiv = styled.div`
    max-width: 40%;
`;
