import styled from 'styled-components';

export const RecentContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
    background-color: white;
    padding: 0.7em;
    border-radius: 5px;
    margin-inline: 2em;
    h3{
        color: ${({theme}) => theme.colors.green};
    }

`;

export const RecentOption = styled.h4`
    color: ${({theme}) => theme.colors.orange};
    font-weight: bold;
    text-align: center;


`;