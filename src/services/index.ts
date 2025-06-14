const host = "http://localhost:3000"
const search = async (url: string) => {
  const reponse = await fetch(`${host}/${url}`, {headers: {'accept': 'application/json'}})
  const data = await reponse.json();
  return data;
}

export {search}; 