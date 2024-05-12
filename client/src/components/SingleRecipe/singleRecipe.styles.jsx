import styled from 'styled-components';

export const SingleRecipeContainer  = styled.main`
    height: auto;
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2rem;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 5px;
    padding: 1rem;
    border: 1px solid pink;
    @media screen and (max-width: 900px){
      //  border: 2px solid orange;
    }
    @media screen and (max-width: 500px){
       // border: 1px solid red;
    }
`;

export const TopDiv = styled.section`
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

export const LeftSide = styled.aside`
    img{
        height: 300px;
        width: 400px;
        
    }
`;

export const RightSide = styled.aside`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.7em;
    padding: 0.5em;
    h2{
       color: ${({theme}) => theme.colors.green};
       font-weight: bold;
       text-transform: capitalize;
       padding-bottom: 0.3rem;
       border-bottom: 1px solid ${({theme}) => theme.colors.grey2};
    }
    .userLink{
        text-decoration: none;
        color: ${({theme}) => theme.colors.peachyPink};
        font-weight: 700;
    }

    @media screen and (max-width: 500px){
       // border: 1px solid green;
    }
`;

export const Bottom = styled.section`
width: 100%;
display: flex;
height: auto;
gap: 2em;
margin-block: 2em;
border-radius: 5px;
    h4{
        font-weight: bold;
        padding-inline: 0.6rem;
        color:  ${({theme}) => theme.colors.white};
        //color: ${({theme}) => theme.colors.green};
        padding-block: 1rem;
        background-color: hsla(349, 43%, 66%, 0.5);
       // background-color: ${({theme}) => theme.colors.offWhite};
        border-bottom: 1px solid ${({theme}) => theme.colors.white};
        
    }

    @media screen and (max-width: 900px){
        flex-wrap: wrap;
        border: 2px solid orange;
    }
    @media screen and (max-width: 500px){
       border: 1px solid purple; 
    }
`;

export const IngredientsDiv = styled.div`
width: 30%;
border-radius: 5px;
border: 2px solid ${({theme}) => theme.colors.offWhite};
.outside{
    display: flex;
    width: 90%;
    margin: 0.5rem;
}

.insideIng1{
    display: flex;
    margin-bottom: 1rem;

}
.insideIng1 li{
    padding-top: 0.4em;
}
.ing2 li{
    padding-left: 1em;
    padding-top: 0.4em;
    margin-bottom: 1rem;
}

@media screen and (max-width: 500px){
    border: 1px solid blue;
    width: 100%;

}
`;

export const InstructionsDiv = styled.div`
width: 70%;
border-radius: 5px;
border: 2px solid ${({theme}) => theme.colors.offWhite};
ol{
    margin:0.5em;
}
li{
  padding-top: 0.4em;
  margin-bottom: 1rem;
 }

 @media screen and (max-width: 500px){
    border: 1px solid yellow;
    width: 100%;
 }
`