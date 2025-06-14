const monthOfYear = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

const formatDay = (day: number) => {
  return `0${day}`.slice(-2);
}
const FORMAT_DATE = (value: string) => {
  const date = new Date(value.split(" ")[0]);
  return `${formatDay(date.getDay())} ${monthOfYear[date.getMonth() + 1]} ${date.getFullYear()}`;
}

export {FORMAT_DATE}