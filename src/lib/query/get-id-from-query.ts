export default function getIdFromQuery(query: string) {
  const id = query.toString()
    .match(/\d{5,}/) // the ID is the first 5+ digit integer
  return id && Number(id[0])
}
