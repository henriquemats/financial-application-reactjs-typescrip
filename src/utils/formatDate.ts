const formatDate = (date: Date): string => {
  const dateConverted = new Date(date)
    .toLocaleDateString()
    .substr(0, 19)
    .replace('T', ' ');

  return dateConverted;
};

export default formatDate;
