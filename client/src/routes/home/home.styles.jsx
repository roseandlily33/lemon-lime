import styled from 'styled-components';

export const MainDiv = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap: 1em;
    @media screen and (max-width: 900px){
        flex-wrap: wrap;
        border: 2px solid orange;
        align-items: center;
        justify-content: center;
    }
`;

export const HeroImage = styled.div`
    width: 100%;
    height: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    img{
        max-width: 100%;
        height: auto;
        opacity: 0.8;
  
    }
    .overlay {
        background-color: rgba(0,0,0,0.8); 
    }
    .text{
        position: absolute;
        top: 22%;
        left: 5%;
        color: ${({theme}) => theme.colors.white};
    }
    .text h2{
        text-transform: lowercase;
        font-weight: bold;
        font-size: 4.5rem;
        padding-bottom: 0.6rem;
    }
    button{
       color: ${({theme}) => theme.colors.white};
       background-color: ${({theme}) => theme.colors.orange};
       border: ${({theme}) => theme.colors.white};
    }
    button:hover{
        background-color: ${({theme}) => theme.colors.peachyPink};;
    }
`;
export const BottomDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 95%;
    height: 60%;
`;
export const LeftMainDiv = styled.div`
    width: 60%;
    max-height: 90%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    margin-right: 1em;
    padding: 1em;
    @media screen and (max-width: 900px){
        border: 2px solid orange;
        width: 100%;
    }
`;

export const RightMainDiv = styled.div`
    min-width: 30%;
    max-height: 90%;
    width: auto;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding: 1em;

    @media screen and (max-width: 900px){
        width: 100%;
        border: 2px solid orange;
    }
    
`;

