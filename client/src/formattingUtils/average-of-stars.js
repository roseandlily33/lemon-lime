export const averageOfStars = (stars) => {
  if (!stars) return;
  let total = 0;
  stars?.map((star) => {
    return (total += star?.rating);
  });
  return Math.floor(total / stars.length);
};
