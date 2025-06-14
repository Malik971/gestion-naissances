const FORMAT_DATE = (value: string) => {
  const date = new Date(value.split(" ")[0]);
  return `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export {FORMAT_DATE}