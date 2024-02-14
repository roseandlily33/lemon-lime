import styled from 'styled-components';

export const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 3px 7px;
    background-color: ${({theme}) => theme.colors.white};
    height: auto;
    width: auto;
    padding: 1em;
    border-radius: 5px;
    margin-top: 1em;
    img{
        margin-top: 0.2em;
        height: 150px;
        width: 250px;
    }

`;
