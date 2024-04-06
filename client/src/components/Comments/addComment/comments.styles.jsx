import styled from 'styled-components';

export const CommentContainer = styled.div`
    width: 95vw;
    display: flex;
    flex-direction: column;

    margin-top: 3em;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 5px;
    padding: 1em;
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
        padding-bottom: 0.5em;
    }
`;