export const isEndDateAfterOrEqualStart = (startDate, selectedDate) => {
  const selected = new Date(selectedDate);
  const start = new Date(startDate);
  return selected >= start;
};
