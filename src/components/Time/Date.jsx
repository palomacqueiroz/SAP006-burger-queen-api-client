import { differenceInMinutes, format } from 'date-fns';

export const getTime = (dateString) => {
    const date = new Date(dateString);
    const dateFormatted = format(date, "dd/MM/yyyy HH:mm");
  
    return dateFormatted;
  
}

export const getInterval = (startDateString, endDateString) => {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const TotalDate = differenceInMinutes(endDate, startDate);
return TotalDate + ' min';
};
