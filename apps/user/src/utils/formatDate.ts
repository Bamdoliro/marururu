const formatDate = (date: string) => {
  const formattedDate = date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');

  return formattedDate;
};

export default formatDate;
