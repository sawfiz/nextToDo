function isBefore(dateString, days) {
  // Parse the input date string into a Date object
  const inputDate = new Date(dateString);
  if (!inputDate) return false;

  // Get today's date
  const today = new Date();

  const currentTimestamp = today.getTime();

  const futureDate = currentTimestamp + days * 24 * 60 * 60 * 1000;

  const daysLater = new Date(futureDate);

  // Set the time part of both dates to 00:00:00 to compare only the dates
  inputDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  // Compare the dates
  if (inputDate < daysLater) {
    return true;
  }
  return false;
}

export default isBefore;
