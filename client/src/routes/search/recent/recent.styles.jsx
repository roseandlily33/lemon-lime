import styled from 'styled-components';

export const RecentContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    h4{
        color: ${({theme}) => theme.colors.green};
        font-size: 1.2rem;
    }
    p:hover{
        color: ${({theme}) => theme.colors.orange};
    }
`;
