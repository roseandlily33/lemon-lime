import styled from 'styled-components';

export const SingleRecipeContainer  = styled.section`
    height: auto;
    width: 95%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 1rem;
    h2{
       color: ${({theme}) => theme.colors.green};
       font-weight: bold;
       text-transform: capitalize;
       padding-bottom: 0.3rem;
       border-bottom: 1px solid ${({theme}) => theme.colors.grey3};
    }
    @media screen and (max-width: 900px){
      //  border: 2px solid orange;
    }
    @media screen and (max-width: 500px){
       // border: 1px solid red;
    }
`;

export const TopDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 2em;
    @media screen and (max-width: 900px){
        flex-wrap: wrap-reverse;
       // border: 2px solid orange;
       
    }
    @media screen and (max-width: 500px){
       // border: 1px solid blue;
    }
`;

export const LeftSide = styled.div`
    img{
        height: 300px;
        width: 400px;
        
    }
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.7em;
    padding: 0.5em;
    ul{
        background-color: ${({theme}) => theme.colors.white};
        border-radius: 5px;
    }
    @media screen and (max-width: 500px){
       // border: 1px solid green;
    }
`;

export const Bottom = styled.div`
width: 100%;
display: flex;
height: auto;
gap: 2em;
margin-top: 1em;
border-radius: 5px;
    h3{
        font-weight: bold;
        padding-inline: 0.6rem;
        color: ${({theme}) => theme.colors.grey1};
        padding-block: 1rem;
        background-color: ${({theme}) => theme.colors.offWhite};
        border-bottom: 1px solid ${({theme}) => theme.colors.white};
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    @media screen and (max-width: 900px){
        flex-wrap: wrap;
      //  border: 2px solid orange;
    }
    @media screen and (max-width: 500px){
      //  border: 1px solid purple;
    }
`;

export const IngredientsDiv = styled.div`
width: 30%;
border-radius: 5px;
background-color: ${({theme}) => theme.colors.white};
.outside{
    display: flex;
    width: 100%;
    margin:0.5em;
}

.insideIng1{
    display: flex;
}
.insideIng1 li{
    padding-top: 0.4em;
}
.ing2 li{
    padding-left: 1em;
    padding-top: 0.4em;
}

@media screen and (max-width: 500px){
   // border: 1px solid blue;
    width: 100%;

}
`;

export const InstructionsDiv = styled.div`
width: 70%;
border-radius: 5px;
background-color: ${({theme}) => theme.colors.white};
ol{
    margin:0.5em;
}
li{
  padding-top: 0.4em;
 }

 @media screen and (max-width: 500px){
    border: 1px solid yellow;
    width: 100%;

 }
`