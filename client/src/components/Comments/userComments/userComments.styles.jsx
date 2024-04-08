import styled from 'styled-components';

export const UserCommentsContainer = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-inline: 1em;
    margin-left: 1em;
    .comments{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
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
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    flex-direction: column;
    gap: 0.4em;
    margin: 1em;
    padding: 1em;
    border-radius: 5px;
    h4{
     padding-bottom: 0.3em;
     font-weight: bold;
     width: 100%;
     border-bottom: 1px solid ${({theme}) => theme.colors.grey};
    }
    p{
        padding-top: 0.3em;
        padding-bottom: 0.3em;
    }
    button{
        width: 150px;
        margin-left: 70%;
        margin-right: 90%;
    }
    @media screen and (max-width: 900px){
        flex-wrap: wrap;
        width: 90%;
    }


`