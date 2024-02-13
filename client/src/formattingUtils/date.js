export const formatDate = (timeHere) => {
    let newTime = new Date(timeHere);
    return newTime.toLocaleDateString();
}

