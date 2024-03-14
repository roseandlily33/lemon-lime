import styled from 'styled-components';

export const UserContainer = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;

`;
export const UserRecipesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 1em;
    padding: 1em;
    flex-wrap: wrap;
    @media screen and (max-width: 900px){
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
`;

export const UserOptionsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 900px){
        flex-wrap: wrap;
        flex-direction: column;
        gap: 0.4em;
    }
    h1{
        color: ${({theme}) => theme.colors.green};

    }
`;


