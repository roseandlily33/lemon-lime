import styled from 'styled-components';
export const CreateRecipeForm = styled.form`
    width: 90vw;
    gap: 2em;
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 1em;
    padding: 1em;
    border: 5px solid ${({theme}) => theme.colors.yellow};
    background-color: ${({theme}) => theme.colors.white};
    overflow-y: scroll;
    label{
       font-weight: bold;
    }
    input{
        padding: 0.8em;
        border: 3px solid ${({theme}) => theme.colors.yellow};
        width: 70%;
    }
`;
export const TopForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 1em;
`

export const SideForm = styled.div`
    width: 45%;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1em;
`;

export const EachInput = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
