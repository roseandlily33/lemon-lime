import { useCallback, useState, useEffect } from "react";
import { RatingDiv } from "./Rating.styles";

const Rating = ({name, value, onChange}) => {
    const [hoveredRating, setHoveredRating] = useState(value);
    const[currentRating, setCurrentRating] = useState(value);
    const handleClick = useCallback((ratingValue) => {
        if(currentRating === ratingValue){
            setCurrentRating(0);
        } else {
            setCurrentRating(ratingValue);
        }
    },[currentRating]);

    useEffect(() => {
        onChange(currentRating)
    }, [currentRating, onChange])
    
    return (   
        <RatingDiv>
        <p>Current Rating: {currentRating}</p> 
        {[...Array(5)].map((_, idx) => {
            const ratingValue = idx + 1;
            return <p key={idx} className={ratingValue <= (hoveredRating || currentRating) ? 'selected': ''} 
            onMouseEnter={() => setHoveredRating(ratingValue)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => handleClick(ratingValue)}>
                &#9733;
            </p>
        })}
    </RatingDiv>
        );
}
 
export default Rating;