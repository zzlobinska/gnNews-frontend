export const getDate = (date: string) => {
  const fullDate = new Date(date).toLocaleDateString();
  const hour = new Date(date).toLocaleString('pl', {
    hour: 'numeric',
    minute: 'numeric'
  });
  return fullDate + ' ' + hour;
};
