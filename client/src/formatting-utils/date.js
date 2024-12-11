import { format } from "date-fns";

export const formatDate = (timeHere) => {
  let newTime = new Date(timeHere);
  console.log("NEW TIME", newTime);
  return format(newTime, "MM/dd/yyyy");
};
