export const averageOfStars = (stars) => {
    console.log('STARS', stars);
    let total = 0;
     stars.map((star) => {
        return total += star.rating;
    }); 
    console.log('AVERAGE', total)
    return Math.floor(total / stars.length);
}
