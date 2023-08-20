export const isStartDateAfterOrEqualToday = (selectedDate) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set the time component to midnight to avoid changes between the today date and selected date if there are equal
  const selected = new Date(selectedDate);
  return selected >= today;
};
