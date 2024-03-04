import styled from 'styled-components';

export const RecipeCont = styled.div`
   box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    background-color: ${({theme}) => theme.colors.white};
    height: auto;
    width: auto;
    padding: 1em;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1em;
    h4{
        margin-top: 0.3em;
    }
    img{
        float: right;
        height: 150px;
        width: 250px;
        z-index: -1;
        margin-top: 0.3em;
   
    }
`;