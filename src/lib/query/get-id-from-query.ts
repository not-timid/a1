import { ReadonlyURLSearchParams } from 'next/navigation'

export default function getIdFromQuery(query : ReadonlyURLSearchParams) {
  const id = query.toString()
    .match(/\d{5,}/) // the ID is the first 5 (or more) digit integer
  return id && Number(id[0])
}
