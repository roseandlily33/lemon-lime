import { useCallback, useState, useEffect } from "react";
import { RatingDiv } from "./rating.styles";

const Rating = ({name, value, onChange}) => {
    const [hoveredRating, setHoveredRating] = useState(0);
    const[currentRating, setCurrentRating] = useState(0);
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
        <h3>Current Rating: {currentRating}</h3> 
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