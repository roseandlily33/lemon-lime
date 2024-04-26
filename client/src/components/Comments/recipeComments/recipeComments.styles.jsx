import styled from 'styled-components';

export const RecipeCommentsDiv = styled.div`
    width: 100vw;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: 30vh;
`;
export const SingleCommentDiv = styled.div`
    padding: 1em;
    margin: 1.5em;
    background-color: ${({theme}) => theme.colors.white};
    border: none;
    width: 60%;
    border-radius: 5px;
    p{
        padding-top: 0.4em;
        margin: 0.2em;
    }
    @media screen and (max-width: 500px){
        padding: 0.4rem;
        margin: 0;
        width: 95%;
    }
`;

export const SingleTop = styled.div`
    display: flex;
    flex-direction: column;
    .underTitleDiv{
            display: flex;
            gap: 1rem;
    }
`;
