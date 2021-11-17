export const handleReadingTime = (time: number): string => {
  return `${(time / 60).toFixed()} phút đọc`;
};
