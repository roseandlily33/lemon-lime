import styled from 'styled-components';

export const UserContainer = styled.div`
    height: 100vh;
    width: 100vw;
   // background-color: ${({theme}) => theme.colors.offWhite};
`;

export const UserOptionsContainer = styled.div`
    height: 40%;
    width: 100%;
    position: absolute;
    z-index: 4;
    display: flex;
    h2{
        color: ${({theme}) => theme.colors.green};
        padding-bottom: 1rem;
    }
    .imgDiv{
        width: 100vw;
        height: 100%;
        z-index: -1;
        position: absolute;
        top: 0;
        overflow: hidden;
    }
    img{
        width: 100%;
        height: 80%;
        overflow: hidden;
    }
    .userDiv{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: end;
        justify-content: space-between;
    }
    .userInfo{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        position: absolute;
        top: 60%;
        padding: 3rem;
    }
   
`;
export const UserRecipesContainer = styled.div`
//border: 1px solid blue;
    display: flex;
    margin-inline: 1rem;
    gap: 1rem;
    z-index: 4;
    overflow-x: scroll;
    scrollbar-width: thin;
    scrollbar-color: ${({theme}) => theme.colors.green} ${({theme}) => theme.colors.orange};
    position: relative;
    text-align: center;
    top: 40%;
    align-items: center;
    justify-content: center;
    padding-block: 0.5rem;
`;

export const UserOptions = styled.div`
    display: flex;
    margin-inline: 1rem;
    gap: 1rem;
    z-index: 4;
    position: relative;
    top: 37%;
    padding-block: 1rem;
    align-items: center;
    justify-content: space-evenly;
    overflow-x: scroll;
    scrollbar-width: thin;
    scrollbar-color: ${({theme}) => theme.colors.green} ${({theme}) => theme.colors.orange};
    div{
        height: 120px;
        width: 300px;
        border-radius:  5px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: ${({theme}) => theme.colors.offWhite} 0px 2px 4px 0px, ${({theme}) => theme.colors.grey2} 0px 2px 16px 0px;
    }
    div:hover{
        box-shadow: ${({theme}) => theme.colors.offWhite} 0px 2px 4px 0px, ${({theme}) => theme.colors.peachyPink} 0px 2px 16px 0px;
        h2{
            color: blue;
        }
    }

`;