import styled from 'styled-components';

export const CommentContainer = styled.div`
    border: 1px solid orange;
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 1em;
    padding-left: 1em;
    
`;

export const RatingDiv = styled.div`
    

`;

export const CommentForm = styled.form`
     padding-left: 1em;
     display: flex;
     flex-direction: column;
     gap: 0.3em;
     width: 50vw;
    button{
        max-width: 200px;
    }
`;
