const formatPostedAt = (postedAt: string) => {
  const date = new Date(postedAt);

  const year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate();

  return `${year}.${`${month}`.padStart(2, '0')}.${`${day}`.padStart(2, '0')}`;
};

export default formatPostedAt;
