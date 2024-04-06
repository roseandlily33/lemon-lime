import styled from 'styled-components';

export const RecipeCommentsDiv = styled.div`
    width: 100vw;
    margin: 1em;
    padding-left: 0.5em;
`;
export const SingleCommentDiv = styled.div`
    padding: 1em;
    margin: 1.5em;
    background-color: ${({theme}) => theme.colors.white};
    border: none;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

    width: 60%;
    border-radius: 5px;
    p{
        padding-top: 0.4em;
        margin: 0.2em;
    }
`;

export const SingleTop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
    margin: 0.2em;
`;
