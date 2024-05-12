import styled from 'styled-components';

// Responsive Styling Done
export const RecipeCont = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    @media screen and (width >= 360px){
        padding: 0.5rem;
        width: 100%;
        height: auto;

        .recipePhoto{
        height: 100%;
        max-height: 100px;
        min-height: 100px;
        width: 150px;
        border-radius: 5px;
        float: right;
        }

    }
    @media screen and (width >= 768px){

        .recipePhoto{
        height: 100%;
        max-height: 150px;
        min-height: 150px;
        width: 250px;
        border-radius: 5px;
        float: right;
    }
    }
   
`;

export const TopLabel = styled.div`
`;

export const LeftContainer = styled.div`
    @media screen and (width >= 360px){
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    align-items: center;
`;
