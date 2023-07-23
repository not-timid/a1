import { Suspense } from 'react'
import { HeaderClient, HeaderFallback } from './header-client'
import LocaleI from '../../locales/locale-schema'

export default function Header({ t }: { t: LocaleI }) {
  return (
    <Suspense fallback={<HeaderFallback />}>
      <HeaderClient t={t} />
    </Suspense>
  )
}
