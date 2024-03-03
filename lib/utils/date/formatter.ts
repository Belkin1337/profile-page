export const formatDate = (duration: number) => {
  const totalSeconds = Math.floor(duration / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  
  return `${minutes}:${formattedSeconds}`;
};