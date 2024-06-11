const formatStartDate = (startDate: string) => {
  const date = new Date(startDate);

  const month = (date.getMonth() + 1).toString().padStart(2, '0'),
    day = date.getDate().toString().padStart(2, '0'),
    hours = date.getHours().toString().padStart(2, '0'),
    minutes = date.getMinutes().toString().padStart(2, '0');

  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = daysOfWeek[date.getDay()];

  return `${month}월 ${day}일 (${dayOfWeek}) ${hours}:${minutes}`;
};

export default formatStartDate;
