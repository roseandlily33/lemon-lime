import styled from 'styled-components';
//Responsive Done for the home page
export const MainDiv = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

export const HeroImage = styled.section`
    width: 100%;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden; 
    @keyframes slideInFromLeft {
    0% {
    transform: translateX(-100%);
    }
    100% {
    transform: translateX(0);
    }
    }
    button{
       color: ${({theme}) => theme.colors.white};
       background-color: ${({theme}) => theme.colors.orange};
       border: ${({theme}) => theme.colors.white};
    }
    button:hover{
        background-color: ${({theme}) => theme.colors.peachyPink};;
    }
    img{
        width: 100%;
        height: 20vh;
        opacity: 0.8;   
    }
    .overlay {
        height: auto;
        background-color: rgba(0,0,0,0.8); 
    }
    .text{
        animation: 1s ease-out 0s 1 slideInFromLeft;
        position: absolute;
        color: ${({theme}) => theme.colors.white};
    }
    .text h2{
        text-transform: lowercase;
        font-weight: bold;
        font-size: 4rem;
    }
    
    @media screen and (width >= 360px){
        height: 20vh;
        .text{
            top: 11%;
            left: 3%;
        }
        .text h2{
            font-size: 2rem;
        }
        button{
            margin-top: 1rem;
        }
    }
    @media screen and (width >= 768px){
        height: 30vh;
        img{
            height: 30vh;
        }
        .text{
            top: 13%;
            left: 5%;
        }
        .text h2{
            font-size: 3rem;
        }
    }
     @media screen and (width >= 1100px){
        height: 40vh;
        img{
            height: 40vh;
        }
        .text{
            top: 15%;
            left: 4%;
        }
    }

`;
export const BottomDiv = styled.section`
    display: flex;
    width: 100%;
    position: absolute;
    padding: 1rem;
    @media screen and (width >= 360px){
        top: 27%;
        flex-direction: column; 
    }
    @media screen and (width >= 768px){
        top: 37%;
        flex-direction: row;
        justify-content: space-around;
    }
     @media screen and (width >= 1000px){
        top: 47%;
    }

`;
export const LeftMainDiv = styled.aside`
    height: 30vh;
    overflow-y: scroll;
    padding: 1em;
    @media screen and (width >= 768px){
        height: 60vh;
        width: 60%;
    }
`;

export const RightMainDiv = styled.aside`
    height: 50vh;
    overflow-y: scroll;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (width >= 768px){
        height: 60vh;
        width: 35%;
    }
`;

