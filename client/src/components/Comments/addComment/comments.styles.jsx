import styled from 'styled-components';

export const CommentContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 1em;
    padding-left: 1em;
    @media screen and (max-width: 900px){
        width: 100%;
        padding: 0;
        margin: 0;
    }
`;

export const CommentForm = styled.form`
     padding-left: 1em;
     display: flex;
     flex-direction: column;
     gap: 0.3em;
     width: 70vw;
     .button{
        width: 50%;
     }
     @media screen and (max-width: 900px){
        width: 100%;
        padding-left: 0;
        padding-inline: 1em;
    }
`;

export const FormElement = styled.div`
    display: flex;
    flex-direction: column;
    padding-block: 0.4em;
    label{
        font-weight: bold;
    }
`;