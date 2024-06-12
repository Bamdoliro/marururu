const formatDate = (applicationDate: string) => {
  const onlyNumbers = applicationDate.replace(/\D/g, '');

  const trimmedDate = onlyNumbers.slice(0, 8);

  if (trimmedDate.length === 8) {
    return trimmedDate.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
  }

  return trimmedDate;
};

export default formatDate;
