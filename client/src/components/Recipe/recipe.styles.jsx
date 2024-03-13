import styled from 'styled-components';

export const RecipeCont = styled.div`
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    background-color: ${({theme}) => theme.colors.white};
    height: auto;
    gap: 1em;
    padding: 1em;
    display: flex;
    align-items: center;
    border-radius: 5px;
    margin-block: 0.7em;

    h4{
        margin-top: 0.1em;
    }
    .recipePhoto{
        height: 100%;
        max-height: 150px;
        min-height: 150px;
        width: 250px;
        border-radius: 5px;
        float: right;
    }
`;

export const TopLabel = styled.div`
        display: flex;
        align-items: center;   
`;

export const LeftContainer = styled.div`
    width: 50%;
`;

export const RightContainer = styled.div`
    width: 50%;
`;
