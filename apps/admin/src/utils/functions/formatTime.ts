const formatTime = (time: string) => {
  const onlyNumbers = time.replace(/\D/g, '');

  const trimmedTime = onlyNumbers.slice(0, 4);

  if (trimmedTime.length !== 4) {
    return trimmedTime;
  }

  const hour = parseInt(trimmedTime.slice(0, 2), 10);
  const minute = parseInt(trimmedTime.slice(2, 4), 10);

  const formattedHour = hour.toString().padStart(2, '0');
  const formattedMinute = minute.toString().padStart(2, '0');

  return `${formattedHour} : ${formattedMinute}`;
};

export default formatTime;
