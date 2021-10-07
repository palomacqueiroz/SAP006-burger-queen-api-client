import { differenceInMinutes, format } from 'date-fns';

export const getTime = (dateString) => {
    const date = new Date(dateString);
    const dateFormatted = format(date, "dd/MM/yyyy HH:mm");
    // const hours = date.getHours().toString().padStart(2, '0');
    // const minutes = date.getMinutes().toString().padStart(2, '0');
    console.log(dateFormatted, 'date');
    // return date + hours + ":" +  minutes;
    return dateFormatted;
  
}

export const getInterval = (startDateString, endDateString) => {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const TotalDate = differenceInMinutes(endDate, startDate);
  return TotalDate + ' min';
};

//timeStamp js