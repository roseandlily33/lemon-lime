import styled from 'styled-components';

export const UserCommentsContainer = styled.section`
    max-width: 100vw;
    height: 100vh;
    overflow-x: hidden;
     h2{
    margin: 2rem;
   }
`;
export const OuterDiv = styled.div`
     display: flex;
     justify-content: space-around;
     gap: 1rem;
     margin-inline: 1rem;
     height: 100%;
     width: 95vw;
`;

export const RightCommentsDiv = styled.div`
    height: 90%;
    width: 50%;
    h3{
    margin: 1rem;
   }
`;

export const LeftCommentsDiv = styled.div`
    height: 90%;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const SingleCommentDiv = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 5px;
    padding: 1rem;
    p{
        margin-block: 0.5rem;
    }
`;

export const CommentDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 5px;
    padding: 1em;
    margin-inline: 1rem;
`;