import styled from 'styled-components';

export const RecentContainer = styled.div`
    display: flex;
    align-items: center;
    h4{
        color: ${({theme}) => theme.colors.green};
    }
    p:hover{
        color: ${({theme}) => theme.colors.orange};
    }
`;
