import styled from 'styled-components';

//Responsive Design Done
export const OuterForm = styled.main`
  height: 100vh;
  width: 100vw;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const RecipeForm = styled.form`
display: flex;
flex-direction: column;
width: 95%;
background-color: ${({theme}) => theme.colors.white};
border-radius: 5px;
margin-bottom: 1em;
padding: 2rem;
overflow-y: scroll;
h2, h3{
    margin-bottom: 0.5em;
    color: ${({theme}) => theme.colors.green};
 }
 hr{
    margin-bottom: 1em;
 }
`;

export const TopForm = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 1em;
    select{
        width: 10%;
    }
    input{
        width: 40%;
    }
    .each{
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: space-between;
        margin-right: 4rem;
    }
`;

export const LeftDiv = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    @media screen and (width >= 360px){ 
        width: 100%;
    }
   @media screen and (width >= 768px){ 
        width: 60%;       
    }

`;

export const RightDiv = styled.div`
     width: auto;
     @media screen and (width >= 360px){ 
        width: 100%;
        margin-top: 1rem;
        .cooking-image{
        height: 150px;
        width: 200px;
        float: left;
      } 
    }
  @media screen and (width >= 768px){ 
        width: 30%;
        margin-top: 0rem;
        .cooking-image{
        height: 250px;
        width: 250px;
        float: right;
    }    
    }
`;

export const MiddleForm = styled.section`
    display: flex;
    flex-direction: column;
`;

export const BottomForm = styled.div`
    width: 100%;
    min-height: 20%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    .buttonContainer{
        margin-block: 1em;
    }
    .items{
        display: flex;
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0.5em;
        gap: 1em;
        height: 20%;
    }
   .items button{
        width: 100%;
        margin-top: 0.5em;
    }
    img{
        height: 150px;
        width: 250px;
    }

`;

//Form Elements
export const InputDiv = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.colors.white};
    /* justify-content: center; */
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    @media screen and (width >= 360px){
        /* max-width: 100%; */
        flex-wrap: wrap;
        input{
          min-width: 100%;
          margin-block: 1rem;
        }
        button{
          min-width: 150px;
          float: right;
        }
    }
    @media screen and (width >= 768px){
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: space-between;
        gap: 1.5em;
        padding: 1rem;
        input{
          min-width: 50%;
          margin-block: 0;
        }
        button{
          width: inherit;
          float: none;
        }
    }
`;

export const MiddleContainer = styled.div`
   display: flex; 
   flex-direction: column;
`;
export const OptionsContainer = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
`;

export const EachI = styled.div`
    display: flex;
    width: 100%;
    gap: 2rem;
    align-items: center;
    border-radius: 5px;
    margin-block: 1rem;
    padding: 1rem;
    justify-content: space-evenly;
    /* border: 1px solid red; */
    input{
        width: 100%;
    }
    .left{
        width: 70%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;  
    }
    .left h4{
      color: ${({theme}) => theme.colors.green};
      padding-right: 2rem;
    }
    .right{
        /* border: 1px solid green; */
        width: 25%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
    }
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  .type--A {
  --line_color: ${({theme}) => theme.colors.darkGrey};
  --back_color: ${({theme}) => theme.colors.lightGreen};
 }

.button {
  position: relative;
  z-index: 0;
  width: 240px;
  height: 56px;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  color: var(--line_color);
  letter-spacing: 2px;
  transition: all 0.3s ease;
}
.button:not(:last-child) {
  margin-bottom: 64px;
}
.button__text {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.button::before,
.button::after,
.button__text::before,
.button__text::after {
  content: "";
  position: absolute;
  height: 3px;
  border-radius: 2px;
  background: var(--line_color);
  transition: all 0.5s ease;
}
.button::before {
  top: 0;
  left: 54px;
  width: calc(100% - 56px * 2 - 16px);
}
.button::after {
  top: 0;
  right: 54px;
  width: 8px;
}
.button__text::before {
  bottom: 0;
  right: 54px;
  width: calc(100% - 56px * 2 - 16px);
}
.button__text::after {
  bottom: 0;
  left: 54px;
  width: 8px;
}
.button__line {
  position: absolute;
  top: 0;
  width: 56px;
  height: 100%;
  overflow: hidden;
}
.button__line::before {
  content: "";
  position: absolute;
  top: 0;
  width: 150%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 300px;
  border: solid 3px var(--line_color);
}
.button__line:nth-child(1),
.button__line:nth-child(1)::before {
  left: 0;
}
.button__line:nth-child(2),
.button__line:nth-child(2)::before {
  right: 0;
}
.button:hover {
  letter-spacing: 6px;
}
.button:hover::before,
.button:hover .button__text::before {
  width: 8px;
}
.button:hover::after,
.button:hover .button__text::after {
  width: calc(100% - 56px * 2 - 16px);
}
.button__drow1,
.button__drow2 {
  position: absolute;
  z-index: -1;
  border-radius: 16px;
  transform-origin: 16px 16px;
}
.button__drow1 {
  top: -16px;
  left: 40px;
  width: 32px;
  height: 0;
  transform: rotate(30deg);
}
.button__drow2 {
  top: 44px;
  left: 77px;
  width: 32px;
  height: 0;
  transform: rotate(-127deg);
}
.button__drow1::before,
.button__drow1::after,
.button__drow2::before,
.button__drow2::after {
  content: "";
  position: absolute;
}
.button__drow1::before {
  bottom: 0;
  left: 0;
  width: 0;
  height: 32px;
  border-radius: 16px;
  transform-origin: 16px 16px;
  transform: rotate(-60deg);
}
.button__drow1::after {
  top: -10px;
  left: 45px;
  width: 0;
  height: 32px;
  border-radius: 16px;
  transform-origin: 16px 16px;
  transform: rotate(69deg);
}
.button__drow2::before {
  bottom: 0;
  left: 0;
  width: 0;
  height: 32px;
  border-radius: 16px;
  transform-origin: 16px 16px;
  transform: rotate(-146deg);
}
.button__drow2::after {
  bottom: 26px;
  left: -40px;
  width: 0;
  height: 32px;
  border-radius: 16px;
  transform-origin: 16px 16px;
  transform: rotate(-262deg);
}
.button__drow1,
.button__drow1::before,
.button__drow1::after,
.button__drow2,
.button__drow2::before,
.button__drow2::after {
  background: var(--back_color);
}
.button:hover .button__drow1 {
  animation: drow1 ease-in 0.06s;
  animation-fill-mode: forwards;
}
.button:hover .button__drow1::before {
  animation: drow2 linear 0.08s 0.06s;
  animation-fill-mode: forwards;
}
.button:hover .button__drow1::after {
  animation: drow3 linear 0.03s 0.14s;
  animation-fill-mode: forwards;
}
.button:hover .button__drow2 {
  animation: drow4 linear 0.06s 0.2s;
  animation-fill-mode: forwards;
}
.button:hover .button__drow2::before {
  animation: drow3 linear 0.03s 0.26s;
  animation-fill-mode: forwards;
}
.button:hover .button__drow2::after {
  animation: drow5 linear 0.06s 0.32s;
  animation-fill-mode: forwards;
}
@keyframes drow1 {
  0% {
    height: 0;
  }
  100% {
    height: 100px;
  }
}
@keyframes drow2 {
  0% {
    width: 0;
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  11% {
    opacity: 1;
  }
  100% {
    width: 120px;
  }
}
@keyframes drow3 {
  0% {
    width: 0;
  }
  100% {
    width: 80px;
  }
}
@keyframes drow4 {
  0% {
    height: 0;
  }
  100% {
    height: 120px;
  }
}
@keyframes drow5 {
  0% {
    width: 0;
  }
  100% {
    width: 124px;
  }
}

  
`;