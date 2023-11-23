const formatDate = (date: string) => {
  return date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
};

export default formatDate;
