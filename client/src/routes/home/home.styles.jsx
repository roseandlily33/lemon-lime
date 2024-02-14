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
    h2{
        text-align: center;
        color: ${({theme}) => theme.colors.green};
    }

`;

export const LeftMainDiv = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;

export const RightMainDiv = styled.div`
 min-width: 30%;
    width: auto;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;
