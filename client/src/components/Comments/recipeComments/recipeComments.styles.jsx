import styled from 'styled-components';

export const RecipeCommentsDiv = styled.div`
    width: 100vw;
    margin: 1em;
`;
export const SingleCommentDiv = styled.div`
    padding: 1em;
    margin: 1.5em;
    background-color: ${({theme}) => theme.colors.white};
    border: none;
    border-radius: 5px;
    p{
        padding-top: 0.4em;
    }
`;

export const SingleTop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
   
`;
