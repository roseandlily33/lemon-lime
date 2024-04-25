import styled from 'styled-components';

export const UserContainer = styled.div`
    height: 100vh;
    width: 100vw;
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
        height: 100%;
    }
    .userDiv{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: end;
        padding: 1em;
        justify-content: space-between;
        background-color: hsla(0, 0%, 100%, 0.2);
    }
    .buttonDiv button{
        margin-right: 1rem;
    }  
`;
export const UserRecipesContainer = styled.div`
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
    padding-block: 0.5rem;
    scrollbar-width: thin;
    scrollbar-color: ${({theme}) => theme.colors.green} ${({theme}) => theme.colors.orange};
`;

