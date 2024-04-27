import styled from 'styled-components';

export const RecipeCommentsDiv = styled.div`
    width: 90vw;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 30vh;
`;
export const SingleCommentDiv = styled.div`
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.white};
    border: 2px solid  ${({theme}) => theme.colors.offWhite};
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
