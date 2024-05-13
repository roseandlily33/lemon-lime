import styled from 'styled-components';

export const UserContainer = styled.main`
    height: 100vh;
    width: 100vw;
   // background-color: ${({theme}) => theme.colors.offWhite};
`;

export const UserOptionsContainer = styled.section`
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
export const UserRecipesContainer = styled.section`
    display: flex;
    margin-inline: 1rem;
    gap: 1rem;
    z-index: 4;
    position: relative;
    text-align: center;
    top: 40%;
    align-items: center;
    padding: 1rem;
`;

export const UserOptions = styled.aside`
    display: flex;
    margin-inline: 1rem;
    gap: 1rem;
    z-index: 4;
    position: relative;
    top: 37%;
    padding-block: 1rem;
    margin-top: 4rem;
    align-items: center;
    justify-content: space-around;
`;