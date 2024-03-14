import styled from 'styled-components';

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100vw;
    align-items: center;
    @media screen and (max-width: 500px){
        width: 100%;
    }
`;

export const TopFormEdit = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1em;
    select{
        width: 20%;
    }
    input{
        width: 40%;
    }
    @media screen and (max-width: 500px){
        width: 100%;
        border: 1px solid orange;
    }

    
`;

export const LeftDivEdit = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    @media screen and (max-width: 500px){
        width: 100%;
        border: 1px solid orange;
    }
`;

export const RightDivEdit = styled.div`
    width: auto;
    .cooking-image{
        height: 250px;
        width: 250px;
        float: right;
    } 
    @media screen and (max-width: 500px){

        border: 1px solid orange;
        float: center;
        align-items: center;
    }
`;


export const SingleInputDivEdit = styled.div`
    display: flex;
    gap: 1.5em;
    @media screen and (max-width: 500px){
        width: 100%;
        border: 1px solid red;
    }
`;

export const MiddleFormEdit = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 500px){
        width: 100%;
        border: 1px solid orange;
    }
    /* button {
        width: 100px;
        text-wrap: wrap;    
    } */
`;


export const TopIngDivEdit = styled.div`
    padding: 1em;
    @media screen and (max-width: 500px){
        width: 100%;
    }
`
export const BottomIngDivEdit = styled.div`
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    bottom: 1px red;
    input{
        width: 50%;
    }
    @media screen and (max-width: 500px){
        width: 100%;
        input{
            width: 100%;
            padding: 0.8em;
        }
       
    }
`;

export const InstructionsEdit = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em;
    margin-bottom: 0.5em;
    div{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;
        padding: 1em;
    }
    input{
        width: 100%;
    }

    @media screen and (max-width: 500px){
        width: 100%;
        flex-wrap: wrap;
        input{
            width: 90%;
            padding: 1em;
        }
        .mobileRight{
            margin-top: 1em;
            width: 100%;
            display: flex;
            justify-content: end;
        }
    }

`;



export const SingleMeaIngDivEdit = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1em;
    margin-bottom: 0.5em;
    h4{
        color: ${({theme}) => theme.colors.green}
    }
    .outerLeft{
        display: flex;
        flex-direction: column;
        width: 20%;
    }
    .left{
        height: 3em;
        display: flex;
        align-items: center;
        margin-top: 0.5em;
    }
    .outerRight{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .right{
        height: 3em;
        gap: 1em;
        display: flex;
        align-items: center;
        margin-top: 0.5em;
        input{
            width: 100%;
        }
    }
`;

export const PhotosSectionEdit = styled.div`
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
    @media screen and (max-width: 500px){
        width: 100%;
        justify-content: center;
        align-items: center;
        .buttonContainer{
            margin-block: 1em;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .items{
            justify-content: center;
            align-items: center;
        }
    }
`;
