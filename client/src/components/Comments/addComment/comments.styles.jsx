import styled from 'styled-components';

export const CommentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 3em;
    background-color: ${({theme}) => theme.colors.offWhite};
    border-radius: 5px;
    padding: 1em;
    border: 2px solid ${({theme}) => theme.colors.offWhite};
    h4{
        background-color: ${({theme}) => theme.colors.offWhite};
        width: 100%;
        padding: 0;
        margin: 0;
        color: ${({theme}) => theme.colors.green};
    }
    @media screen and (width >= 360px){
        padding: 1rem;
        margin-top: 2rem;
    }
`;

export const CommentForm = styled.form`
     padding-left: 1em;
     display: flex;
     flex-direction: column;
     gap: 0.3em;
     width: 100%;
     margin-block: 1rem;
     padding-block: 1rem;
     border-radius: 5px;
     background-color: ${({theme}) => theme.colors.white};
     .button{
        width: 50%;
     }
     input, textarea{
        width: 80%;
        background-color: ${({theme}) => theme.colors.white};
        border: 2px solid ${({theme}) => theme.colors.yellow};
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