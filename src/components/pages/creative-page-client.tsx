'use client'

import { useSearchParams } from 'next/navigation'
import { CreativePageI } from '../../locales/locale-schema'
import getIdFromQuery from '../../lib/query/get-id-from-query'

export default function CreativePageClient({ t }: { t: CreativePageI }) {
  const id = getIdFromQuery(useSearchParams());
  return (<>
    <h1 className="font-serif">{t.title}</h1>
    <p>{id ? id : t.intro}</p>
  </>)
}

// Passed as a fallback to the Suspense boundary. Will be rendered in the
// initial HTML, until the value is available during React hydration, when
// it will be replaced with `<CreativePageClient>`.
export function CreativePageFallback() { return <>...</> }