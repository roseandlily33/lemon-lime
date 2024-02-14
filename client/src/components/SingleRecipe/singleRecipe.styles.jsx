import styled from 'styled-components';

export const SingleRecipeContainer  = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    h2{
        color: ${({theme}) => theme.colors.lightYellow};
    }
`;

export const TopDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

export const LeftSide = styled.div`
    border: 1px solid purple;
    height: 400px;
    width: 500px;
    img{
        height: 400px;
        width: 500px;
    }
`;

export const RightSide = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    padding: 1em;
    ul{
        padding: 1em;
        background-color: ${({theme}) => theme.colors.lightYellow};
;
        width: 600px;
    }
    li{
        margin-top: 0.5em;
        text-decoration: none;
        font-size: 1.2em;
    }

`;

export const Bottom = styled.div`
border: 1px solid green;
display: flex;
flex-direction: column;
gap: 1em;
padding: 3em;
width: 100%;
h3{
    text-align: center;
    color: ${({theme}) => theme.colors.yellow};
}
li{
    margin-top: 0.5em;
}
`;