import styled from 'styled-components';
//Responsive Done for the home page
export const MainDiv = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    gap: 1em;
`;

export const HeroImage = styled.section`
    width: 100%;
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    img{
        max-width: 100%;
        opacity: 0.8;   
        height: auto;
    }
    .overlay {
        height: auto;
        background-color: rgba(0,0,0,0.8); 
    }
    @keyframes slideInFromLeft {
    0% {
    transform: translateX(-100%);
    }
    100% {
    transform: translateX(0);
    }
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
        padding-bottom: 0.6rem;
    }
    button{
       color: ${({theme}) => theme.colors.white};
       background-color: ${({theme}) => theme.colors.orange};
       border: ${({theme}) => theme.colors.white};
       width: 30%;
       height: 60px;
       margin-top: 1rem;
       font-size: 1.2rem;
    }
    button:hover{
        background-color: ${({theme}) => theme.colors.peachyPink};;
    }
    @media screen and (width <= 1200px){  
     .text{
        top: 10%;
        left: 4%;
    }
    }
    @media screen and (width >= 1200px){
        .text{
            top: 13%;
            left: 5%;
        }
    }
    @media screen and (width <= 980px){
        .text{
            top: 9%;
            left: 3%;
        }
        .text h2{
            font-size: 2rem;
        }
        button{
            width: 20%;
            height: 40px;
            margin-top: 1rem;
            font-size: 1rem;
        }
    }
`;
export const BottomDiv = styled.section`
    display: flex;
    width: 90%;
    height: 60%;
    gap: 2rem;
    @media screen and (width >= 360px){  
        flex-direction: column;
    }
    @media screen and (width >= 768px){
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
`;
export const LeftMainDiv = styled.aside`
    max-height: 90%;
    display: flex;
    flex-direction: column;
    margin-right: 1em;
    padding: 1em;
    @media screen and (width >= 360px){
        width: 100%;
    }
    @media screen and (width >= 768px){
        width: 60%;
    }
`;

export const RightMainDiv = styled.aside`
    min-width: 30%;
    max-height: 90%;
    display: flex;
    flex-direction: column;
    padding: 1em;
    @media screen and (width >= 360px){
        width: 100%;;
    }
    @media screen and (width >= 768px){
        width: 40%;
        align-items: center;
    }
`;

