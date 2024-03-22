import styled from 'styled-components';

export const UserCommentsContainer = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-inline: 1em;
    .comments{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;
    }
`;

export const SingleCommentDiv = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    width: 50%;
    min-width: 40%;
    height: 30%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 0.4em;
    margin: 1em;
    padding: 1em;
    border: 2px solid ${({theme}) => theme.colors.green};
    border-radius: 5px;
    div{
        width: 90%;
    }
    h4{
        padding-bottom: 0.3em;
    }
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