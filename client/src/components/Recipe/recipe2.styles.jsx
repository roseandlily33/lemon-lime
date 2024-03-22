import styled from 'styled-components';

export const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4em;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    background-color: ${({theme}) => theme.colors.white};
    min-width: 300px;
    height: auto;
    width: 300px;
    max-width: 300px;
   // max-height: 50%;
    padding: 1em;
    border-radius: 5px;
    margin-top: 1em;
    .recipePhoto{
        margin-top: 0.2em;
        width: 250px;
        max-width: 250px;
        border-radius: 5px;
        height: 100%;
        max-height: 150px;
        min-height: 150px;
    }
    .topDiv{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.3em;

    }
`;

export const TopContainer = styled.div`

   // border: 1px solid purple;
`;
