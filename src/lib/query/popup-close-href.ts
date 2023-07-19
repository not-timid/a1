export default function popupCloseHref(query: string) {
  let q = query.replace(/%2F/g, '/') // '%2F12345%2F=' -> '/12345/='
  q = q.slice(-1) === '=' ? q.slice(0, -1) : q // remove trailing '='
  const id = q.match(/\d{5,}/) // the ID is the first 5+ digit integer
  return id ? `?/${id}/` : './'
}
