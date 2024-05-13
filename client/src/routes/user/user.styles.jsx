import styled from 'styled-components';

export const UserContainer = styled.main`
    height: 100vh;
    width: 100vw;
`;

export const UserInfo = styled.div`
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-left: 1rem;
`;

export const UserOptionsContainer = styled.section`
    @media screen and (width >= 360px){
        .imgDiv img{
        height: 30%;
        width: 100%;
    }
    }
    @media screen and (width >= 768px){
        .imgDiv img{
        height: 20%;
        width: 100%;
    }
    }
     @media screen and (width >= 1000px){
        .imgDiv img{
        height: 400px;
        width: 100%;
    }
    }
`;
export const UserRecipesContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    justify-content: center;
    gap: 1rem;
    overflow-y: scroll;
    padding: 1rem;
    @media screen and (width >= 360px){
         max-height: 60vh;
    }
    @media screen and (width >= 768px){
         max-height: 53vh;
    }
`;

export const UserOptions = styled.aside`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;
    width: 30%;
    margin-left: 1rem;
`;

export const UserContentContainer = styled.div`
    display: flex;
    gap: 2rem;
`;