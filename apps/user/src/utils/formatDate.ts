const formatDate = (date: string) => {
  const formattedDate = date.replace(/(\d{4})(\d{2})(\d{0,2})/, '$1-$2-$3');

  return formattedDate;
};

export default formatDate;
