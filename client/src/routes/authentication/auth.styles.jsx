import styled from 'styled-components';

export const AuthPage = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

export const AuthForm = styled.div`
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 5px;
    height: 80%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    padding: 3em;
    border: 3px dashed ${({theme}) => theme.colors.yellow};
    h3{
        text-align: center;
        font-size: 1.5em;
        color: ${({theme}) => theme.colors.green};
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
    }
`;
export const EachInput = styled.div`
display: flex;
gap: 1em;
flex-direction: row;
justify-content: space-between;
input{
    width: 80%;
}
`;
