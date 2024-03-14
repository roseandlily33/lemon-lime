import styled from 'styled-components';

export const CreateRecipeForm = styled.form`
display: flex;
flex-direction: column;
width: 95%;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
background-color: ${({theme}) => theme.colors.white};
padding: 1em;
border-radius: 5px;
margin-bottom: 1em;
 h1{
    margin-bottom: 0.5em;
    color: ${({theme}) => theme.colors.green};
    text-decoration: underline;
 }
 hr{
    margin-bottom: 1em;
 }
`;

export const TopForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1em;
    select{
        width: 20%;
    }
    input{
        width: 40%;
    }
    
`;
export const LeftDiv = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
`;

export const RightDiv = styled.div`
    width: auto;
    .cooking-image{
        height: 250px;
        width: 250px;
        float: right;
    } 
`;

export const SingleInputDiv = styled.div`
    display: flex;
    gap: 1.5em;
`;

export const MiddleForm = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TopIngDiv = styled.div`
    padding: 1em;
`
export const BottomIngDiv = styled.div`
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    input{
        width: 50%;
    }
`;

export const SingleMeaIngDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;
    margin-bottom: 0.5em;
    align-items: center;
    h4{
        color: ${({theme}) => theme.colors.green}
    }
    div{
        display: flex;
        gap: 2em;
        align-items: center;
    }
    
`;



export const PhotosSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    .buttonContainer{
        margin-block: 1em;
    }
    .items{
        display: flex;
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0.5em;
        gap: 1em;
    }
   .items button{
        width: 100%;
        margin-top: 0.5em;
    }
    img{
        height: 150px;
        width: 250px;
    }
`;
