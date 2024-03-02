import styled from 'styled-components';

export const UserCommentsContainer = styled.section`
    border: 1px solid red;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SingleCommentDiv = styled.div`
    border: 1px solid purple;
    background-color: ${({theme}) => theme.colors.white};

`