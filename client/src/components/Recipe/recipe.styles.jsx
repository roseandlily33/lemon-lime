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
    @media screen and (max-width: 500px){
        gap: 1em;
        flex-wrap: wrap;
    }
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
    &:hover{
        box-shadow: ${({theme}) => theme.colors.offWhite} 0px 2px 4px 0px, ${({theme}) => theme.colors.orange} 0px 2px 16px 0px;
    }
`;

export const TopLabel = styled.div`
        display: flex;
        align-items: center;   
        flex-wrap: wrap;
        max-width: 100%;
        font-size: 1rem;
        @media screen and (max-width: 500px){
        gap: 1em;
        flex-wrap: wrap;
        width: 100%;
        
    }
`;

export const LeftContainer = styled.div`
    width: 50%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    gap: 0.2em;

    @media screen and (max-width: 500px){
        gap: 1em;
        width: 100%;
        flex-wrap: wrap;
    }
`;

export const RightContainer = styled.div`
    width: 50%;
    max-width: 50%;
    img{
        max-width: 100%;
    }
    @media screen and (max-width: 500px){
        gap: 1em;
        width: 100%;
        display: flex;  
    }
`;
