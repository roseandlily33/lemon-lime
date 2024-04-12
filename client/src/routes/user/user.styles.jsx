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
    @media screen and (max-width: 850px){
        .userDiv{
            height: 30%;
            flex-wrap : wrap;   
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: end;
            margin-top: 35%;
        }
    }
    @media screen and (max-width: 600px){
        .userDiv{
            margin-top: 10%;;
        }
    }
    @media screen and (max-width: 400px){
        .userDiv{
            margin-top: 5%;;
        }
    }
    h2{
        color: ${({theme}) => theme.colors.green};
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
        display: flex;
        justify-content: space-between;
        align-items: end;
        margin-inline: 3rem;
        padding-bottom: 2rem;
        
    }
    .buttonDiv button{
        margin-right: 1rem;
    }
`;
export const UserRecipesContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
    z-index: 4;
    overflow-x: scroll;
    position: relative;
    text-align: center;
    top: 40%;
    align-items: center;
    padding-block: 0.5rem;
    @media screen and (max-width: 950px){
       
    }
`;

