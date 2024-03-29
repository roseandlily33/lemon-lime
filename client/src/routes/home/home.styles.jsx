import styled from 'styled-components';

export const MainDiv = styled.main`
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 90%;
    gap: 1em;
    @media screen and (max-width: 900px){
        flex-wrap: wrap;
        border: 2px solid orange;
        align-items: center;
        justify-content: center;
    }
    h1{
        text-align: center;
        color: ${({theme}) => theme.colors.green};
        font-weight: bold;
    }
`;

export const LeftMainDiv = styled.div`
    width: 60%;
    max-height: 70%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    margin-right: 1em;
    padding: 1em;
    @media screen and (max-width: 900px){
        border: 2px solid orange;
        width: 100%;
    }
`;

export const RightMainDiv = styled.div`
    min-width: 30%;
    max-height: 50%;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    padding: 1em;
    @media screen and (max-width: 900px){
        width: 100%;
        border: 2px solid orange;
    }
    
`;
