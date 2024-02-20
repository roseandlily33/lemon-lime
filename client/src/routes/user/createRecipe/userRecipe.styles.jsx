import styled from 'styled-components';
export const CreateRecipeForm = styled.form`
border: 1px solid red;
display: flex;
flex-direction: column;
align-items: center;
width: 95%;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
background-color: ${({theme}) => theme.colors.white};
padding: 1em;
border-radius: 5px;
margin-bottom: 1em;
 h1{
    margin-bottom: 0.5em;
    text-align: center;
    color: ${({theme}) => theme.colors.green};
 }
`;

export const TopForm = styled.div`
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
     gap: 0.8em;
     select{
        width: auto;
     }
     input{
        width: 40%;
     }
`;

export const MiddleForm = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 1em;
    padding-bottom: 1em;
`;
export const MeasurementsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7em;
    width: 20%;
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1em;
    }
`;
export const IngredientsDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.53em;
    input{
        width: 100%;
    }
`;

export const BottomForm = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    padding-top: 1em;
    padding-bottom: 1em;
    gap: 1em;
`;

export const InstructionsDiv = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 gap: 1em;
 input{
        width: 75%;
    }

`;