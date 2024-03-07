import styled from 'styled-components';

export const CarouselDiv = styled.div`

`;

export const Direction = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1em;
`;

export const LeftDirection = styled.div`
    
`

export const RightDirection = styled.div`

`
export const Indicator = styled.div`
    display: flex;
    justify-content: center;
    gap: 1em;
    .dot {
    background-color: ${({theme}) => theme.colors.green};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    }
    .active {
        background-color: ${({theme}) => theme.colors.orange};
    }
`;

export const RecipeImage = styled.div`
    padding: 0.6em;
`;