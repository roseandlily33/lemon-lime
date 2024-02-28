export const formatStars = (num) => {
  if(num === 1){
    return  '★☆☆☆☆'
  } else if (num === 2){
    return ' ★★☆☆☆';
  } else if (num === 3){
    return '★★★☆☆';
  } else if (num === 4){
    return '★★★★☆'
  } else if (num === 5){
    return '★★★★★'
  } else {
    return 'Stars unavailable'
  }
}



