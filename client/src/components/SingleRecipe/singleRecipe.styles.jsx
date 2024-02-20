import styled from 'styled-components';

export const SingleRecipeContainer  = styled.section`
    height: auto;
    width: 95%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    h1{
       color: ${({theme}) => theme.colors.orange};
       font-weight: bold;
       text-transform: uppercase;
    }
    h2{
        font-weight: bolder;
    }
`;

export const TopDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const LeftSide = styled.div`
    img{
        height: 300px;
        width: 400px;
    }
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5em;
    padding: 0.5em;
    ul{
        padding: 1em;
        background-color: ${({theme}) => theme.colors.white};
        border-radius: 5px;
    }
    li{
        margin-top: 1em;
        text-decoration: none;
    }

`;

export const Bottom = styled.div`
width: 100%;
padding: 0.5em;
h3{
    text-align: center;
    color: ${({theme}) => theme.colors.yellow};
}
ol{
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 5px;
    padding: 0.2em;
}
li{
    margin-top: 1em;
}
`;