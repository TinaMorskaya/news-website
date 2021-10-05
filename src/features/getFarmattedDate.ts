export const getFormattedDate = (date: string) => {
  let parsedDate = new Date(date);
  let day: string | number = parsedDate.getDate();
  let month: string | number = parsedDate.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  let year = parsedDate.getFullYear();
  return year + '/' + month + '/' + day;
};
