const formatDate = (date: string) => {
  const cleanedDate = date.replace(/\D/g, '');

  let year = cleanedDate.slice(0, 4);
  if (parseInt(year) > 2024) {
    year = '';
  }

  const month = cleanedDate.slice(4, 6);
  const day = cleanedDate.slice(6, 8);
  const formattedDate = [year, month, day].filter(Boolean).join('-');

  return formattedDate;
};

export default formatDate;
