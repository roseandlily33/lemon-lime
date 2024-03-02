import styled from 'styled-components';

export const CommentContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em;
    padding-left: 1em;
`;

export const CommentForm = styled.form`
     padding-left: 1em;
     display: flex;
     flex-direction: column;
     justify-content: center;
     gap: 0.3em;
     width: 50vw;
     .button{
        width: 50%;
     }
`;

export const FormElement = styled.div`
    display: flex;
    flex-direction: column;
    padding-block: 0.4em;
`;