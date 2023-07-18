'use client'

import { UserAvatar } from '@carbon/icons-react'
import { useSearchParams } from 'next/navigation'
import { queryHasSegment, queryPopupLink } from '../../lib/query'
import { PopupI } from '../../locales/locale-schema'
import PopupIcon, { PopupIconFallback } from './popup-icon'
import PopupPanel from './popup-panel'

export default function ProfilePopupClient({ t }: { t: PopupI }) {
  const query = useSearchParams().toString()
  const isActive = queryHasSegment(query, t.route)
  const href = !isActive && queryPopupLink(query, t.route)
  return (<>
    <PopupIcon t={t} href={href} Icon={UserAvatar} />
    <PopupPanel hidden={!!href}>{t.title}</PopupPanel>
  </>)
}

// Passed as a fallback to the Suspense boundary. Will be rendered in the
// initial HTML, until the value is available during React hydration, when
// it will be replaced with `<ProfilePopupClient>`.
export function ProfilePopupFallback() {
  return <PopupIconFallback rounded="full" />
}
