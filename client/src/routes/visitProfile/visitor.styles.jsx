import styled from 'styled-components';

export const VisitorContainer = styled.section`
    display: flex;
    height: 100vh;
    width: 100vw;   
`;
export const LeftContainer = styled.div`
    img{
        height: 100vh;
    }
`
export const RightContainer = styled.div`
    width: 100%;
    margin: 1rem; 
    background-color: ${({theme}) => theme.colors.white};
`;
export const UsersInfo = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.white};
    margin-bottom: 1rem;
    border-radius: 5px;
    h2{
        font-size: 1.8rem;
        color: ${({theme}) => theme.colors.peachyPink};
    }
    img{
        border-radius: 50%;
        width: 150px;
        height: 150px;
    }
`;
export const UserOptions = styled.div`
    display: flex;
    height: 5%;
    gap: 1rem;
    border-radius: none;
    background-color: ${({theme}) => theme.colors.white};
    h3{
        background-color: ${({theme}) => theme.colors.offWhite};
        color: ${({theme}) => theme.colors.darkGrey};
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        padding: 1rem;
    }
    .selected{
        background-color: ${({theme}) => theme.colors.peachyPink};
        color: ${({theme}) => theme.colors.white};
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        padding: 1rem;
    }  
`;

export const UsersRecipes = styled.div`
    height: 80%;
    overflow-y: scroll;
`;
export const UserRecipeContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
  // border: 10px solid ${({theme}) => theme.colors.peachyPink};
   border-top: 10px solid ${({theme}) => theme.colors.peachyPink};
   // background-color:hsl(0, 100%, 80%);
    padding: 2rem;
    //border-radius: 5px;
`