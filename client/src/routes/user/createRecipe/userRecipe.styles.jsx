import styled from 'styled-components';
export const CreateRecipeForm = styled.form`
    width: 80vw;
    gap: 2em;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1em;


    border: 5px solid ${({theme}) => theme.colors.yellow};
    padding: 1em;
    background-color: ${({theme}) => theme.colors.white};
    label{
       font-weight: bold;
       font-size: 1.3em;
    }
    input{
        padding: 0.8em;
        border: 5px solid ${({theme}) => theme.colors.yellow};

        width: 70%;
    }
`;
// export const RightForm = styled.div`
//    width: 50%;
//    display: flex;
//    flex-direction: column;

//    align-items: center;
//    gap: 1em;
// `;

// export const LeftForm = styled.div`
//     display: flex;
//     flex-direction: column;

//     align-items: center;
//     width: 50%;
//     gap: 1em;

// `;