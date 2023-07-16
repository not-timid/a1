export default function queryHasSegment(query: string, segment: string) {
  return query.endsWith(`%2F${segment}=`) || query.includes(`%2F${segment}%2F`)
}
