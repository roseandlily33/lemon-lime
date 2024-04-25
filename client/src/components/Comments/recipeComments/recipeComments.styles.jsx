import styled from 'styled-components';

export const RecipeCommentsDiv = styled.div`
    width: 100vw;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: 30vh;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: ${({theme}) => theme.colors.green} ${({theme}) => theme.colors.orange};

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
