const formatCreatedAt = (createdAt: string) => {
  const date = new Date(createdAt);

  const year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hours = date.getHours(),
    minutes = date.getMinutes();

  return `${year}년 ${month}월 ${day}일 ${hours}:${minutes}`;
};

export default formatCreatedAt;
