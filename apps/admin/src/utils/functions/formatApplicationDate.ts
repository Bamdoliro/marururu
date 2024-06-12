const formatApplicationDate = (applicationDate: string) => {
  const date = new Date(applicationDate);

  const year = date.getFullYear(),
    month = (date.getMonth() + 1).toString().padStart(2, '0'),
    day = date.getDate().toString().padStart(2, '0');

  return `${year}.${month}.${day}`;
};

export default formatApplicationDate;
