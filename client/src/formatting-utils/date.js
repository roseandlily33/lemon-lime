import { format } from "date-fns";

export const formatDate = (timeHere) => {
  if (!timeHere) return;
  let newTime = new Date(timeHere);
  return format(newTime, "MM/dd/yyyy");
};
