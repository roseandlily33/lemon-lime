export async function getTotalTime(cookTime, prepTime){
    let firstTotal = Number(cookTime) + Number(prepTime);
    let hours = 0;
    let minutes = 0;
    while(firstTotal > 0){
        if(firstTotal > 60){
            firstTotal -= 60;
            hours += 1;
        } 
        if(firstTotal > 0 && firstTotal < 60){
            minutes += firstTotal;
            break;
        }
    }
    return {hours, minutes};
}