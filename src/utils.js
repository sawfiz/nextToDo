function isOnOrBefore(dateString, days) {
  // Parse the input date string into a Date object
  const inputDate = new Date(dateString);
  if (!inputDate) return false;

  // Get today's date
  const today = new Date();

  const currentTimestamp = today.getTime();

  const dateToCompare = new Date(currentTimestamp + days * 24 * 60 * 60 * 1000);

  // Set the time part of both dates to 00:00:00 to compare only the dates

  inputDate.setHours(0, 0, 0, 0);
  dateToCompare.setHours(0, 0, 0, 0);

  // Compare the dates
  if (inputDate.getTime() <= dateToCompare.getTime()) {
    return true;
  }
  return false;
}

function getDateText(dateString) {
  // Parse the input date string into a Date object
  if (!dateString) return;
  const inputDate = new Date(dateString);

  // Get today's date
  const today = new Date();

  // Set the time part of both dates to 00:00:00 to compare only the dates
  inputDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  let days;
  let s;
  // Compare the dates
  if (inputDate.getTime() < today.getTime()) {
    days = (today.getTime() - inputDate.getTime()) / (24 * 60 * 60 * 1000);
    s = days === 1 ? '' : 's';
    return `${days} day${s} ago`;
  }
  if (inputDate.getTime() === today.getTime()) {
    return 'Today';
  }
  days = (inputDate.getTime() - today.getTime()) / (24 * 60 * 60 * 1000);
  s = days === 1 ? '' : 's';
  return `In ${days} day${s}`;
}

export { isOnOrBefore, getDateText };
