import styled from 'styled-components';

export const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.white};
    padding: 1em;
    border-radius: 5px;
    margin-top: 1em;
    max-height: 400px;
    img{
        margin-top: 0.2em;
        height: 150px;
        width: 250px;
        max-width: 250px;
        max-height: 150px;
        border-radius: 5px;
    }
`;

export const ButtonRecipeContainer = styled.div`
margin-top: 1rem;
    display: flex;
    flex-direction: row;
    gap:0.5em;
`;