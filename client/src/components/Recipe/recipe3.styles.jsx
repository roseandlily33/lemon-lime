import styled from 'styled-components';

export const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4em;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    background-color: ${({theme}) => theme.colors.white};
    max-height: 500px;
    max-width: 300px;
    padding: 1em;
    border-radius: 5px;
    margin-top: 1em;
    img{
        margin-top: 0.2em;
        height: 150px;
        width: 250px;
        max-width: 250px;
        max-height: 150px;
        border-radius: 2px;
    }

`;

export const ButtonRecipeContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap:0.5em;
`