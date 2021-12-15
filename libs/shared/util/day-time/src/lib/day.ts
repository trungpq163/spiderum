export const renderDayTimePostPublished = (data: string): string => {
  const day = new Date(data);
  const currentDay = new Date();

  const checkSameYear = day.getFullYear() === currentDay.getFullYear();

  return checkSameYear
    ? `${day.getDate()} tháng ${day.getMonth() + 1}`
    : `${day.getDate()} tháng ${day.getMonth() + 1} năm ${day.getFullYear()}`;
};
