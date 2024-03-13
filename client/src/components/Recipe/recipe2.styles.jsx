import styled from 'styled-components';

export const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4em;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    background-color: ${({theme}) => theme.colors.white};
    height: auto;
    width: auto;
    padding: 1em;
    border-radius: 5px;
    margin-top: 1em;
    .recipePhoto{
        margin-top: 0.2em;
        width: 250px;
        border-radius: 5px;
        height: 100%;
        max-height: 150px;
        min-height: 150px;
    }
`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1em;
`;
