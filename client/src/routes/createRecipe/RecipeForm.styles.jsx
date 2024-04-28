import styled from 'styled-components';

//Done
export const OuterForm = styled.main`
  height: 100vh;
  width: 100vw;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

//Done
export const RecipeForm = styled.form`
display: flex;
flex-direction: column;
width: 70%;
background-color: ${({theme}) => theme.colors.white};
border-radius: 5px;
margin-bottom: 1em;
padding: 2rem;
h2, h3{
    margin-bottom: 0.5em;
    color: ${({theme}) => theme.colors.green};
 }
 hr{
    margin-bottom: 1em;
 }
`;
//Done
export const TopForm = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 1em;
    select{
        width: 10%;
    }
    input{
        width: 40%;
    }
    .each{
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: space-between;
        margin-right: 4rem;
    }
`;

//Done
export const LeftDiv = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
`;
//Done
export const RightDiv = styled.div`
    width: auto;
    .cooking-image{
        height: 250px;
        width: 250px;
        float: right;
    } 
`;

//Done
export const MiddleForm = styled.section`
    display: flex;
    flex-direction: column;
`;

//Done
export const BottomForm = styled.div`
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
        height: 20%;
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
//Form Elements

export const InputDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5em;
    width: 100%;
   // border-bottom: 1px solid ${({theme}) => theme.colors.grey};
    padding: 1rem;
    margin-block: 2rem;
`;

export const MiddleContainer = styled.div`
   display: flex; 
   flex-direction: column;
`;
export const OptionsContainer = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
`;

export const EachI = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 2rem;
    align-items: center;
    border-radius: 5px;
    margin-block: 1rem;
    padding: 1rem;
    justify-content: space-evenly;
    //border: 1px solid red;
    input{
        width: 100%;
        }
    h4{
            padding-right: 2rem;
    }
    h2,p {
       // padding-block: 1.2%;
    }
    .left{
        width: 70%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;  
    }
    .right{
      //  border: 1px solid green;
        width: 25%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
    }
`;

