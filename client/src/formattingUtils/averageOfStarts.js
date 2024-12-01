export const averageOfStars = (stars) => {
  let total = 0;
  stars.map((star) => {
    return (total += star.rating);
  });
  return Math.floor(total / stars.length);
};
