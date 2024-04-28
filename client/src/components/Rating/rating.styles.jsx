import styled from 'styled-components';

export const RatingDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
    .selected{
     color: ${({theme}) => theme.colors.peachyPink};
    }
`;