import styled from 'styled-components';

//Responsive Styling Done
export const RecentContainer = styled.section`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    h4{
        color: ${({theme}) => theme.colors.green};
    }
    p:hover{
        color: ${({theme}) => theme.colors.peachyPink};
    }
`;
