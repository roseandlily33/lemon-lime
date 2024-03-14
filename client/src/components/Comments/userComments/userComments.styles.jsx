import styled from 'styled-components';

export const UserCommentsContainer = styled.section`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-inline: 1em;
`;

export const SingleCommentDiv = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 0.4em;
    margin: 1em;
    padding: 1em;
    border: 2px solid ${({theme}) => theme.colors.green};
    border-radius: 5px;
    button{
        width: 150px;
        margin-left: 60%;
        margin-right: 80%;
    }
    @media screen and (max-width: 900px){
        flex-wrap: wrap;
        width: 90%;
    }


`