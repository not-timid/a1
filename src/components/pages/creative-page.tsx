import { Suspense } from 'react'
import { CreativePageI } from '../../locales/locale-schema'
import CreativePageClient, { CreativePageFallback } from './creative-page-client'

export default function CreativePage({ t }: { t: CreativePageI }) {
  return (
    <Suspense fallback={<CreativePageFallback />}>
      <CreativePageClient t={t} />
    </Suspense>
  )
}
